-- ═══════════════════════════════════════════════════════════════════════════════
-- Migration 002: Study Analytics Enhancement
-- Adds: topic columns, visitor_id tracking, heartbeat table, search logging,
--        content-type parsing, and 12 new RPC functions for richer analytics.
--
-- Run this AFTER the base tables from SUPABASE_SETUP.md exist.
-- ═══════════════════════════════════════════════════════════════════════════════

-- ═══════════════════════════════════════════════════════════════════════════════
-- 1. NEW COLUMNS on existing tables
-- ═══════════════════════════════════════════════════════════════════════════════

ALTER TABLE public.page_visits
  ADD COLUMN IF NOT EXISTS topic        TEXT,
  ADD COLUMN IF NOT EXISTS visitor_id   TEXT,
  ADD COLUMN IF NOT EXISTS scroll_depth INTEGER DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_page_visits_topic      ON public.page_visits (topic);
CREATE INDEX IF NOT EXISTS idx_page_visits_visitor_id ON public.page_visits (visitor_id);

ALTER TABLE public.click_events
  ADD COLUMN IF NOT EXISTS topic       TEXT,
  ADD COLUMN IF NOT EXISTS visitor_id  TEXT;

CREATE INDEX IF NOT EXISTS idx_click_events_topic      ON public.click_events (topic);
CREATE INDEX IF NOT EXISTS idx_click_events_visitor_id ON public.click_events (visitor_id);


-- ═══════════════════════════════════════════════════════════════════════════════
-- 2. NEW TABLE: study_heartbeats
-- Written every ~60 seconds by the client so we never lose >1 min of study time
-- ═══════════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.study_heartbeats (
  id              BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  session_id      TEXT NOT NULL,
  visitor_id      TEXT,
  course          TEXT,
  topic           TEXT,
  accumulated_ms  BIGINT DEFAULT 0,
  page_path       TEXT,
  page_title      TEXT,
  recorded_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_sh_session    ON public.study_heartbeats (session_id);
CREATE INDEX IF NOT EXISTS idx_sh_visitor    ON public.study_heartbeats (visitor_id);
CREATE INDEX IF NOT EXISTS idx_sh_course     ON public.study_heartbeats (course);
CREATE INDEX IF NOT EXISTS idx_sh_topic      ON public.study_heartbeats (topic);
CREATE INDEX IF NOT EXISTS idx_sh_recorded   ON public.study_heartbeats (recorded_at DESC);

ALTER TABLE public.study_heartbeats ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "anon_insert_study_heartbeats" ON public.study_heartbeats
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "anon_select_study_heartbeats" ON public.study_heartbeats
  FOR SELECT TO anon USING (true);


-- ═══════════════════════════════════════════════════════════════════════════════
-- 3. NEW TABLE: search_queries
-- Logs what students search for in the MkDocs search bar
-- ═══════════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.search_queries (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  query         TEXT NOT NULL,
  session_id    TEXT,
  visitor_id    TEXT,
  results_count INTEGER,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_sq_query      ON public.search_queries (query);
CREATE INDEX IF NOT EXISTS idx_sq_created_at ON public.search_queries (created_at DESC);

ALTER TABLE public.search_queries ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "anon_insert_search_queries" ON public.search_queries
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "anon_select_search_queries" ON public.search_queries
  FOR SELECT TO anon USING (true);


-- ═══════════════════════════════════════════════════════════════════════════════
-- 4. NEW RPC FUNCTIONS
-- ═══════════════════════════════════════════════════════════════════════════════

-- ── 4a. Study time by course (from heartbeats, most recent data) ────────────
CREATE OR REPLACE FUNCTION public.get_study_ms_by_course(days INT DEFAULT 30)
RETURNS TABLE (course TEXT, total_study_ms BIGINT, session_count BIGINT)
LANGUAGE sql STABLE
AS $$
  WITH session_course AS (
    SELECT
      sh.session_id,
      COALESCE(sh.course, 'Other') AS course,
      MAX(sh.accumulated_ms) AS session_total_ms
    FROM public.study_heartbeats sh
    WHERE sh.recorded_at > NOW() - (days || ' days')::INTERVAL
    GROUP BY sh.session_id, sh.course
  )
  SELECT
    course,
    COALESCE(SUM(session_total_ms), 0)::BIGINT AS total_study_ms,
    COUNT(DISTINCT session_id)::BIGINT AS session_count
  FROM session_course
  GROUP BY course
  ORDER BY total_study_ms DESC;
$$;
GRANT EXECUTE ON FUNCTION public.get_study_ms_by_course TO anon;

-- ── 4b. Study time by topic within a specific course ────────────────────────
CREATE OR REPLACE FUNCTION public.get_study_ms_by_topic(p_course TEXT DEFAULT NULL, days INT DEFAULT 30)
RETURNS TABLE (topic TEXT, total_study_ms BIGINT, session_count BIGINT)
LANGUAGE sql STABLE
AS $$
  WITH session_topic AS (
    SELECT
      sh.session_id,
      COALESCE(sh.topic, 'General') AS topic,
      MAX(sh.accumulated_ms) AS session_total_ms
    FROM public.study_heartbeats sh
    WHERE sh.recorded_at > NOW() - (days || ' days')::INTERVAL
      AND (p_course IS NULL OR sh.course = p_course)
    GROUP BY sh.session_id, sh.topic
  )
  SELECT
    topic,
    COALESCE(SUM(session_total_ms), 0)::BIGINT AS total_study_ms,
    COUNT(DISTINCT session_id)::BIGINT AS session_count
  FROM session_topic
  GROUP BY topic
  ORDER BY total_study_ms DESC;
$$;
GRANT EXECUTE ON FUNCTION public.get_study_ms_by_topic TO anon;

-- ── 4c. All topics with their course context (combined view) ────────────────
CREATE OR REPLACE FUNCTION public.get_topic_performance(limit_count INT DEFAULT 20, days INT DEFAULT 30)
RETURNS TABLE (
  course         TEXT,
  topic          TEXT,
  total_visits   BIGINT,
  total_clicks   BIGINT,
  total_study_ms BIGINT,
  unique_visitors BIGINT
)
LANGUAGE sql STABLE
AS $$
  WITH
  topic_visits AS (
    SELECT
      COALESCE(pv.topic, 'General') AS t,
      COALESCE(
        CASE
          WHEN pv.path LIKE '/501-Microeconomics/%' OR pv.path LIKE '/microeconomics/%' THEN 'Microeconomics'
          WHEN pv.path LIKE '/503-Development/%'     OR pv.path LIKE '/development/%'   THEN 'Development'
          WHEN pv.path LIKE '/512-Political-Economy/%' THEN 'Political Economy'
          WHEN pv.path LIKE '/health-economics/%'      THEN 'Health Economics'
          WHEN pv.path LIKE '/macroeconomics/%'         THEN 'Macroeconomics'
          WHEN pv.path LIKE '/econometrics/%'           THEN 'Econometrics'
          ELSE 'Other'
        END, 'Other'
      ) AS c,
      COUNT(*)::BIGINT AS visits,
      COUNT(DISTINCT pv.visitor_id)::BIGINT AS visitors
    FROM public.page_visits pv
    WHERE pv.created_at > NOW() - (days || ' days')::INTERVAL
    GROUP BY pv.topic, c
  ),
  topic_clicks AS (
    SELECT
      COALESCE(ce.topic, 'General') AS t,
      COUNT(*)::BIGINT AS clicks
    FROM public.click_events ce
    WHERE ce.created_at > NOW() - (days || ' days')::INTERVAL
    GROUP BY ce.topic
  ),
  topic_study AS (
    SELECT
      t,
      SUM(session_total_ms) AS study_ms
    FROM (
      SELECT
        COALESCE(sh.topic, 'General') AS t,
        sh.session_id,
        MAX(sh.accumulated_ms) AS session_total_ms
      FROM public.study_heartbeats sh
      WHERE sh.recorded_at > NOW() - (days || ' days')::INTERVAL
      GROUP BY sh.session_id, sh.topic
    ) session_topic_totals
    GROUP BY t
  )
  SELECT
    tv.c AS course,
    tv.t AS topic,
    tv.visits AS total_visits,
    COALESCE(tc.clicks, 0)::BIGINT AS total_clicks,
    COALESCE(ts.study_ms, 0)::BIGINT AS total_study_ms,
    tv.visitors AS unique_visitors
  FROM topic_visits tv
  LEFT JOIN topic_clicks tc ON tc.t = tv.t
  LEFT JOIN topic_study ts ON ts.t = tv.t
  ORDER BY total_study_ms DESC, total_visits DESC
  LIMIT limit_count;
$$;
GRANT EXECUTE ON FUNCTION public.get_topic_performance TO anon;

-- ── 4d. Study time per day (flexible window) ────────────────────────────────
CREATE OR REPLACE FUNCTION public.get_study_ms_per_day(days INT DEFAULT 30)
RETURNS TABLE (date DATE, total_ms BIGINT)
LANGUAGE sql STABLE
AS $$
  WITH session_daily AS (
    SELECT
      sh.session_id,
      sh.recorded_at::DATE AS date,
      MAX(sh.accumulated_ms) AS session_total_ms
    FROM public.study_heartbeats sh
    WHERE sh.recorded_at > CURRENT_DATE - (days || ' days')::INTERVAL
    GROUP BY sh.session_id, sh.recorded_at::DATE
  )
  SELECT
    date,
    COALESCE(SUM(session_total_ms), 0)::BIGINT AS total_ms
  FROM session_daily
  GROUP BY date
  ORDER BY date;
$$;
GRANT EXECUTE ON FUNCTION public.get_study_ms_per_day TO anon;

-- ── 4e. Active visitors right now (heartbeat within last N minutes) ────────
CREATE OR REPLACE FUNCTION public.get_active_visitors_now(minutes_window INT DEFAULT 5)
RETURNS TABLE (active_sessions BIGINT, active_visitors BIGINT)
LANGUAGE sql STABLE
AS $$
  SELECT
    COUNT(DISTINCT sh.session_id)::BIGINT AS active_sessions,
    COUNT(DISTINCT sh.visitor_id)::BIGINT AS active_visitors
  FROM public.study_heartbeats sh
  WHERE sh.recorded_at > NOW() - (minutes_window || ' minutes')::INTERVAL;
$$;
GRANT EXECUTE ON FUNCTION public.get_active_visitors_now TO anon;

-- ── 4f. Study time by hour of day (heatmap data) ───────────────────────────
CREATE OR REPLACE FUNCTION public.get_study_hourly_pattern(days INT DEFAULT 30)
RETURNS TABLE (hour_of_day INT, avg_study_ms BIGINT, session_count BIGINT)
LANGUAGE sql STABLE
AS $$
  SELECT
    EXTRACT(HOUR FROM sh.recorded_at)::INT AS hour_of_day,
    COALESCE(AVG(sh.accumulated_ms), 0)::BIGINT AS avg_study_ms,
    COUNT(DISTINCT sh.session_id)::BIGINT AS session_count
  FROM public.study_heartbeats sh
  WHERE sh.recorded_at > NOW() - (days || ' days')::INTERVAL
  GROUP BY hour_of_day
  ORDER BY hour_of_day;
$$;
GRANT EXECUTE ON FUNCTION public.get_study_hourly_pattern TO anon;

-- ── 4g. Content type breakdown (extracts type from page title/path) ────────
CREATE OR REPLACE FUNCTION public.get_content_type_performance(days INT DEFAULT 30)
RETURNS TABLE (content_type TEXT, visits BIGINT, unique_visitors BIGINT)
LANGUAGE sql STABLE
AS $$
  SELECT
    CASE
      WHEN pv.path LIKE '%answers-%' OR pv.path LIKE '%/answers-%' THEN 'Answer Files'
      WHEN pv.path LIKE '%cheat-sheet%' OR pv.path LIKE '%CHEAT-SHEET%' THEN 'Cheat Sheets'
      WHEN pv.path LIKE '%basics%' THEN 'Basics'
      WHEN pv.path LIKE '%exam%' THEN 'Exam Resources'
      WHEN pv.path LIKE '%glossary%' OR pv.path LIKE '%GLOSSARY%' THEN 'Glossary'
      WHEN pv.path LIKE '%questions%' THEN 'Question Banks'
      WHEN pv.path LIKE '%cross-reference%' THEN 'Cross-References'
      WHEN pv.path LIKE '%simulation%' OR pv.path LIKE '%SIMULATION%' THEN 'Simulations'
      ELSE 'Other Pages'
    END AS content_type,
    COUNT(*)::BIGINT AS visits,
    COUNT(DISTINCT pv.visitor_id)::BIGINT AS unique_visitors
  FROM public.page_visits pv
  WHERE pv.created_at > NOW() - (days || ' days')::INTERVAL
  GROUP BY content_type
  ORDER BY visits DESC;
$$;
GRANT EXECUTE ON FUNCTION public.get_content_type_performance TO anon;

-- ── 4h. Visitor stats (returning vs new) ──────────────────────────────────
CREATE OR REPLACE FUNCTION public.get_visitor_stats(days INT DEFAULT 30)
RETURNS TABLE (
  total_visitors       BIGINT,
  returning_visitors   BIGINT,
  new_visitors         BIGINT,
  returning_pct        NUMERIC,
  avg_sessions_per_visitor NUMERIC
)
LANGUAGE sql STABLE
AS $$
  WITH visitor_sessions AS (
    SELECT
      pv.visitor_id,
      COUNT(DISTINCT pv.session_id) AS session_count
    FROM public.page_visits pv
    WHERE pv.created_at > NOW() - (days || ' days')::INTERVAL
      AND pv.visitor_id IS NOT NULL
    GROUP BY pv.visitor_id
  )
  SELECT
    COUNT(*)::BIGINT AS total_visitors,
    COUNT(*) FILTER (WHERE vs.session_count > 1)::BIGINT AS returning_visitors,
    COUNT(*) FILTER (WHERE vs.session_count = 1)::BIGINT AS new_visitors,
    ROUND(
      (COUNT(*) FILTER (WHERE vs.session_count > 1)::NUMERIC / NULLIF(COUNT(*), 0)) * 100, 1
    ) AS returning_pct,
    ROUND(AVG(vs.session_count)::NUMERIC, 2) AS avg_sessions_per_visitor
  FROM visitor_sessions vs;
$$;
GRANT EXECUTE ON FUNCTION public.get_visitor_stats TO anon;

-- ── 4i. Study insights for the dashboard insight panel ────────────────────
CREATE OR REPLACE FUNCTION public.get_study_insights(days INT DEFAULT 30)
RETURNS TABLE (
  insight_key    TEXT,
  insight_value  TEXT,
  insight_type   TEXT   -- 'positive', 'warning', 'info'
)
LANGUAGE sql STABLE
AS $$
  WITH
  course_time AS (
    SELECT
      COALESCE(course, 'Other') AS course,
      SUM(session_ms) AS total_ms,
      MAX(last_active) AS last_active
    FROM (
      SELECT
        sh.course,
        sh.session_id,
        MAX(sh.accumulated_ms) AS session_ms,
        MAX(sh.recorded_at) AS last_active
      FROM public.study_heartbeats sh
      WHERE sh.recorded_at > NOW() - (days || ' days')::INTERVAL
      GROUP BY sh.course, sh.session_id
    ) per_session_course
    GROUP BY course
  ),
  total AS (
    SELECT COALESCE(SUM(total_ms), 0) AS grand_total FROM course_time
  ),
  most_studied AS (
    SELECT course, total_ms FROM course_time ORDER BY total_ms DESC LIMIT 1
  ),
  least_studied AS (
    SELECT course, total_ms FROM course_time WHERE total_ms > 0 ORDER BY total_ms ASC LIMIT 1
  ),
  week_trend AS (
    WITH weekly AS (
      SELECT
        week_start,
        SUM(session_ms) AS wk_ms
      FROM (
        SELECT
          DATE_TRUNC('week', sh.recorded_at)::DATE AS week_start,
          sh.session_id,
          MAX(sh.accumulated_ms) AS session_ms
        FROM public.study_heartbeats sh
        WHERE sh.recorded_at > NOW() - (60 || ' days')::INTERVAL
        GROUP BY week_start, sh.session_id
      ) per_session_week
      GROUP BY week_start
      ORDER BY week_start DESC
      LIMIT 2
    )
    SELECT
      CASE
        WHEN COUNT(*) < 2 THEN 0
        WHEN LAG(wk_ms) OVER (ORDER BY week_start) = 0 THEN 0
        ELSE ROUND(((wk_ms - LAG(wk_ms) OVER (ORDER BY week_start))::NUMERIC / NULLIF(LAG(wk_ms) OVER (ORDER BY week_start), 0)) * 100, 1)
      END AS trend_pct
    FROM weekly
    LIMIT 1
  )
  SELECT
    'most_studied_course' AS insight_key,
    (SELECT course FROM most_studied) AS insight_value,
    'info' AS insight_type
  UNION ALL
  SELECT
    'neglected_course',
    (SELECT course FROM least_studied),
    'warning'
  UNION ALL
  SELECT
    'study_time_total_hours',
    ROUND((SELECT grand_total FROM total) / 3600000.0, 1)::TEXT,
    'info'
  UNION ALL
  SELECT
    'week_trend_pct',
    COALESCE((SELECT trend_pct::TEXT FROM week_trend), '0'),
    CASE WHEN (SELECT trend_pct FROM week_trend) > 0 THEN 'positive' ELSE 'warning' END;
$$;
GRANT EXECUTE ON FUNCTION public.get_study_insights TO anon;

-- ── 4j. Most clicked pages with topic context ──────────────────────────────
CREATE OR REPLACE FUNCTION public.get_most_clicked_pages(limit_count INT DEFAULT 10, days INT DEFAULT 30)
RETURNS TABLE (
  path          TEXT,
  click_count   BIGINT,
  sample_target TEXT,
  topic         TEXT
)
LANGUAGE sql STABLE
AS $$
  SELECT
    ce.path,
    COUNT(*)::BIGINT AS click_count,
    MODE() WITHIN GROUP (ORDER BY ce.target) AS sample_target,
    COALESCE(ce.topic, 'General') AS topic
  FROM public.click_events ce
  WHERE ce.created_at > NOW() - (days || ' days')::INTERVAL
  GROUP BY ce.path, ce.topic
  ORDER BY click_count DESC
  LIMIT limit_count;
$$;
GRANT EXECUTE ON FUNCTION public.get_most_clicked_pages TO anon;

-- ── 4k. Top search queries ────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.get_top_search_queries(limit_count INT DEFAULT 20, days INT DEFAULT 30)
RETURNS TABLE (query TEXT, search_count BIGINT)
LANGUAGE sql STABLE
AS $$
  SELECT sq.query, COUNT(*)::BIGINT AS search_count
  FROM public.search_queries sq
  WHERE sq.created_at > NOW() - (days || ' days')::INTERVAL
  GROUP BY sq.query
  ORDER BY search_count DESC
  LIMIT limit_count;
$$;
GRANT EXECUTE ON FUNCTION public.get_top_search_queries TO anon;

-- ── 4l. Combined dashboard stats (replaces 5 separate RPC calls) ──────────
CREATE OR REPLACE FUNCTION public.get_dashboard_summary(days INT DEFAULT 30)
RETURNS TABLE (
  metric_name  TEXT,
  metric_value BIGINT
)
LANGUAGE sql STABLE
AS $$
  WITH
  totals AS (
    SELECT
      (SELECT COUNT(*)::BIGINT FROM public.click_events ce WHERE ce.created_at > NOW() - (days || ' days')::INTERVAL) AS total_clicks,
      (SELECT COUNT(DISTINCT pv.session_id)::BIGINT FROM public.page_visits pv WHERE pv.created_at > NOW() - (days || ' days')::INTERVAL) AS total_sessions,
      (SELECT COUNT(DISTINCT pv.visitor_id)::BIGINT FROM public.page_visits pv WHERE pv.created_at > NOW() - (days || ' days')::INTERVAL AND pv.visitor_id IS NOT NULL) AS total_visitors,
      (SELECT COUNT(*)::BIGINT FROM public.search_queries sq WHERE sq.created_at > NOW() - (days || ' days')::INTERVAL) AS total_searches,
      (SELECT COUNT(DISTINCT pv.path)::BIGINT FROM public.page_visits pv WHERE pv.created_at > NOW() - (days || ' days')::INTERVAL) AS unique_pages,
      (SELECT COALESCE(SUM(session_ms), 0)::BIGINT FROM (SELECT MAX(sh.accumulated_ms) AS session_ms FROM public.study_heartbeats sh WHERE sh.recorded_at > NOW() - (days || ' days')::INTERVAL GROUP BY sh.session_id) _) AS total_study_ms
  )
  SELECT 'total_clicks' AS metric_name, total_clicks FROM totals
  UNION ALL SELECT 'total_sessions', total_sessions FROM totals
  UNION ALL SELECT 'total_visitors', total_visitors FROM totals
  UNION ALL SELECT 'total_searches', total_searches FROM totals
  UNION ALL SELECT 'unique_pages', unique_pages FROM totals
  UNION ALL SELECT 'total_study_ms', total_study_ms FROM totals;
$$;
GRANT EXECUTE ON FUNCTION public.get_dashboard_summary TO anon;
