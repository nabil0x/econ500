# Supabase Setup — Study Logger v2

These SQL commands set up the backend for the Study Logger widget.
Run them in the **Supabase SQL Editor** (one command at a time or all together).

---

## Step 1: Create a Supabase project

1. Go to [supabase.com](https://supabase.com) → Sign in (GitHub)
2. Click **"New project"** → fill in details → **"Create project"**
3. Wait for the database to provision (1-2 min)

---

## Step 2: Run this SQL in the SQL Editor

Go to **SQL Editor** (left sidebar) → **"New query"** → paste and run:

```sql
-- ═══════════════════════════════════════════════════════════════
-- Table: page_visits
-- ═══════════════════════════════════════════════════════════════
CREATE TABLE public.page_visits (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  path        TEXT NOT NULL,
  title       TEXT,
  referrer    TEXT,
  session_id  TEXT,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Performance indexes
CREATE INDEX idx_page_visits_path       ON public.page_visits (path);
CREATE INDEX idx_page_visits_created_at ON public.page_visits (created_at DESC);

-- ═══════════════════════════════════════════════════════════════
-- Row Level Security: allow anon role to INSERT and SELECT
-- ═══════════════════════════════════════════════════════════════
ALTER TABLE public.page_visits ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a page visit (anon key)
CREATE POLICY "anon_insert_page_visits" ON public.page_visits
  FOR INSERT TO anon
  WITH CHECK (true);

-- Anyone can read page visits (needed for aggregation)
CREATE POLICY "anon_select_page_visits" ON public.page_visits
  FOR SELECT TO anon
  USING (true);

-- ═══════════════════════════════════════════════════════════════
-- RPC function: get top pages by visit count (last 30 days)
-- Called by visitor-logger.js → sbRpc('get_top_pages', {limit_count: 20})
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_top_pages(limit_count INT DEFAULT 20)
RETURNS TABLE (
  path        TEXT,
  title       TEXT,
  visit_count BIGINT
)
LANGUAGE sql
STABLE
AS $$
  SELECT
    pv.path,
    MODE() WITHIN GROUP (ORDER BY pv.title) AS title,
    COUNT(*)::BIGINT AS visit_count
  FROM public.page_visits pv
  WHERE pv.created_at > NOW() - INTERVAL '30 days'
  GROUP BY pv.path
  ORDER BY visit_count DESC
  LIMIT limit_count;
$$;

-- Let anon role call this function
GRANT EXECUTE ON FUNCTION public.get_top_pages TO anon;

-- ═══════════════════════════════════════════════════════════════
-- Table: click_events
-- Logs every link click for total-all-time and per-course stats
-- ═══════════════════════════════════════════════════════════════
CREATE TABLE public.click_events (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  path        TEXT NOT NULL,
  target      TEXT NOT NULL,
  category    TEXT,
  session_id  TEXT,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_click_events_created_at ON public.click_events (created_at DESC);
CREATE INDEX idx_click_events_category   ON public.click_events (category);

ALTER TABLE public.click_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_click_events" ON public.click_events
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_select_click_events" ON public.click_events
  FOR SELECT TO anon USING (true);

-- ═══════════════════════════════════════════════════════════════
-- Table: study_sessions
-- Persists study time per session so totals survive browser clears
-- Each row = one browser session (synced on tab close)
-- ═══════════════════════════════════════════════════════════════
CREATE TABLE public.study_sessions (
  id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  session_id         TEXT NOT NULL,
  date               DATE DEFAULT CURRENT_DATE,
  total_study_ms     BIGINT DEFAULT 0,
  pages_studied      INTEGER DEFAULT 0,
  started_at         TIMESTAMPTZ,
  ended_at           TIMESTAMPTZ DEFAULT NOW(),
  created_at         TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_study_sessions_date    ON public.study_sessions (date DESC);
CREATE INDEX idx_study_sessions_session ON public.study_sessions (session_id);

ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_study_sessions" ON public.study_sessions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anon_select_study_sessions" ON public.study_sessions
  FOR SELECT TO anon USING (true);

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_total_clicks — all-time click count
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_total_clicks()
RETURNS BIGINT
LANGUAGE sql STABLE
AS $$ SELECT COUNT(*)::BIGINT FROM public.click_events; $$;
GRANT EXECUTE ON FUNCTION public.get_total_clicks TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_clicks_today — click count since midnight UTC
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_clicks_today()
RETURNS BIGINT
LANGUAGE sql STABLE
AS $$ SELECT COUNT(*)::BIGINT FROM public.click_events WHERE created_at > CURRENT_DATE; $$;
GRANT EXECUTE ON FUNCTION public.get_clicks_today TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_total_study_ms — cumulative study milliseconds
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_total_study_ms()
RETURNS BIGINT
LANGUAGE sql STABLE
AS $$ SELECT COALESCE(SUM(total_study_ms), 0)::BIGINT FROM public.study_sessions; $$;
GRANT EXECUTE ON FUNCTION public.get_total_study_ms TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_study_ms_today — study milliseconds today
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_study_ms_today()
RETURNS BIGINT
LANGUAGE sql STABLE
AS $$ SELECT COALESCE(SUM(total_study_ms), 0)::BIGINT FROM public.study_sessions WHERE date = CURRENT_DATE; $$;
GRANT EXECUTE ON FUNCTION public.get_study_ms_today TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_study_streak — consecutive days with sessions
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_study_streak()
RETURNS INTEGER
LANGUAGE sql STABLE
AS $$
  WITH dates AS (
    SELECT DISTINCT date FROM public.study_sessions ORDER BY date DESC
  ),
  streaks AS (
    SELECT date, date - ROW_NUMBER() OVER (ORDER BY date)::INTEGER AS grp
    FROM dates
  )
  SELECT COUNT(*)::INTEGER
  FROM streaks
  WHERE grp = (SELECT date - ROW_NUMBER() OVER (ORDER BY date)::INTEGER FROM dates LIMIT 1);
$$;
GRANT EXECUTE ON FUNCTION public.get_study_streak TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_study_ms_per_day — study time per day (last N days)
-- Called by dashboard.js to render 7-day activity chart
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_study_ms_per_day(days INT DEFAULT 7)
RETURNS TABLE (date DATE, total_ms BIGINT)
LANGUAGE sql STABLE
AS $$
  SELECT s.date, COALESCE(SUM(s.total_study_ms), 0)::BIGINT AS total_ms
  FROM public.study_sessions s
  WHERE s.date > CURRENT_DATE - (days || ' days')::INTERVAL
  GROUP BY s.date
  ORDER BY s.date;
$$;
GRANT EXECUTE ON FUNCTION public.get_study_ms_per_day TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_course_breakdown — visits grouped by course
-- Course is derived from URL path prefix (501-Microeconomics/...)
-- NOTE: study time by course is not available (study_sessions has no path-level data)
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_course_breakdown()
RETURNS TABLE (course TEXT, total_visits BIGINT)
LANGUAGE sql STABLE
AS $$
  SELECT
    CASE
      WHEN pv.path LIKE '/501-Microeconomics/%' OR pv.path LIKE '/microeconomics/%' THEN 'Microeconomics'
      WHEN pv.path LIKE '/503-Development/%'     OR pv.path LIKE '/development/%'   THEN 'Development'
      WHEN pv.path LIKE '/512-Political-Economy/%' THEN 'Political Economy'
      WHEN pv.path LIKE '/health-economics/%'      THEN 'Health Economics'
      WHEN pv.path LIKE '/macroeconomics/%'         THEN 'Macroeconomics'
      WHEN pv.path LIKE '/econometrics/%'           THEN 'Econometrics'
      ELSE 'Other'
    END AS course,
    COUNT(DISTINCT pv.path)::BIGINT AS total_visits
  FROM public.page_visits pv
  GROUP BY course
  ORDER BY total_visits DESC;
$$;
GRANT EXECUTE ON FUNCTION public.get_course_breakdown TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_most_studied_pages — top pages by unique sessions
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_most_studied_pages(limit_count INT DEFAULT 10)
RETURNS TABLE (path TEXT, title TEXT, sessions_count BIGINT)
LANGUAGE sql STABLE
AS $$
  SELECT
    pv.path,
    MODE() WITHIN GROUP (ORDER BY pv.title) AS title,
    COUNT(DISTINCT pv.session_id)::BIGINT AS sessions_count
  FROM public.page_visits pv
  GROUP BY pv.path
  ORDER BY sessions_count DESC
  LIMIT limit_count;
$$;
GRANT EXECUTE ON FUNCTION public.get_most_studied_pages TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_my_clicks — all clicks for a given session/user
-- Returns the 50 most recent click events for one session_id.
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_my_clicks(p_session_id TEXT)
RETURNS TABLE (path TEXT, target TEXT, category TEXT, created_at TIMESTAMPTZ)
LANGUAGE sql STABLE
AS $$
  SELECT ce.path, ce.target, ce.category, ce.created_at
  FROM public.click_events ce
  WHERE ce.session_id = p_session_id
  ORDER BY ce.created_at DESC
  LIMIT 50;
$$;
GRANT EXECUTE ON FUNCTION public.get_my_clicks TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_my_click_stats — aggregated click stats for one session
-- Returns total clicks + unique pages clicked for a session_id.
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_my_click_stats(p_session_id TEXT)
RETURNS TABLE (total_clicks BIGINT, unique_pages_clicked BIGINT)
LANGUAGE sql STABLE
AS $$
  SELECT
    COUNT(*)::BIGINT AS total_clicks,
    COUNT(DISTINCT ce.path)::BIGINT AS unique_pages_clicked
  FROM public.click_events ce
  WHERE ce.session_id = p_session_id;
$$;
GRANT EXECUTE ON FUNCTION public.get_my_click_stats TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_my_top_pages — most-clicked pages for a single session
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_my_top_pages(p_session_id TEXT, limit_count INT DEFAULT 10)
RETURNS TABLE (path TEXT, click_count BIGINT)
LANGUAGE sql STABLE
AS $$
  SELECT ce.path, COUNT(*)::BIGINT AS click_count
  FROM public.click_events ce
  WHERE ce.session_id = p_session_id
  GROUP BY ce.path
  ORDER BY click_count DESC
  LIMIT limit_count;
$$;
GRANT EXECUTE ON FUNCTION public.get_my_top_pages TO anon;

-- ═══════════════════════════════════════════════════════════════
-- RPC: get_most_clicked_pages — top pages by click count (all users)
-- ═══════════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.get_most_clicked_pages(limit_count INT DEFAULT 10)
RETURNS TABLE (path TEXT, click_count BIGINT, sample_target TEXT)
LANGUAGE sql STABLE
AS $$
  SELECT
    ce.path,
    COUNT(*)::BIGINT AS click_count,
    MODE() WITHIN GROUP (ORDER BY ce.target) AS sample_target
  FROM public.click_events ce
  GROUP BY ce.path
  ORDER BY click_count DESC
  LIMIT limit_count;
$$;
GRANT EXECUTE ON FUNCTION public.get_most_clicked_pages TO anon;
```

---

## Step 3: Get your API credentials

1. In Supabase, go to **Settings** → **API** (left sidebar)
2. Copy **"Project URL"** — e.g. `https://xyzabcdef.supabase.co`
3. Copy **"anon public"** key (starts with `eyJ...`)

---

## Step 4: Paste into visitor-logger.js

Open `docs/javascripts/visitor-logger.js` and find the `CONFIG` block at the top:

```js
var CONFIG = {
  supabaseUrl: 'https://YOUR_PROJECT.supabase.co',  // ← paste Project URL
  supabaseKey: 'your-anon-key-here',                 // ← paste anon key
};
```

---

## Step 5: Rebuild & deploy

```bash
mkdocs build
git add -A && git commit -m "Study Logger v2: Supabase global tracking + local session time"
git push
```

The GitHub Action will redeploy to GitHub Pages.