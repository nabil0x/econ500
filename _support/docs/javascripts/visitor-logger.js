/**
 * Study Logger v3 — Global analytics + persistence + content intelligence
 *
 * v3 improvements over v2:
 *   - Persistent visitor ID (survives browser sessions via localStorage)
 *   - Topic extraction from URL paths (not just course-level)
 *   - Heartbeat study logging every 60s (no more data loss on crash)
 *   - Search query tracking
 *   - Scroll depth capture
 *   - Content-type tagging (answers, cheat-sheets, basics, etc.)
 *
 * Architecture:
 *   Browser ↔ Supabase REST API (anon key, RLS-protected)
 *   Browser → localStorage (visitor_id, session state)
 *
 * "What gets measured gets managed." — Drucker, probably
 *
 * ── Supabase Setup (run in Supabase SQL Editor) ─────────────────
 * See file: SUPABASE_SETUP.md + supabase/migrations/002_*.sql
 * After setup, paste your Supabase URL + anon key into CONFIG below.
 * ────────────────────────────────────────────────────────────────
 */

/* ══════════════════════════════════════════════════════════════
 *  CONFIG — Replace with YOUR Supabase project credentials
 * ══════════════════════════════════════════════════════════════
 *  1. Go to https://supabase.com → your project → Settings → API
 *  2. Copy "Project URL"  → supabaseUrl
 *  3. Copy "anon public"  → supabaseKey
 * ══════════════════════════════════════════════════════════════ */
var CONFIG = {
  supabaseUrl: 'https://cjhlbpyuzepwogmwjwyl.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqaGxicHl1emVwd29nbXdqd3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzMzI3MTYsImV4cCI6MjA5NjkwODcxNn0.HtUGJAjEkMLItl37UkNmRM-Jjrnjuu_lgU7TJYBiyQs',
  HEARTBEAT_INTERVAL: 60000,  // ms between study heartbeats (60s)
  PAGE_VIEW_DEBOUNCE: 1500,   // ms debounce between page view logs
  CLICK_DEBOUNCE: 400,        // ms debounce between click logs
};

/* ══════════════════════════════════════════════════════════════
 *  LOCAL STORAGE HELPERS
 * ══════════════════════════════════════════════════════════════ */
var SESSION_KEY  = 'sl_v3_session';
var VISITOR_KEY  = 'sl_v3_visitor';

function lsGet(key, def) {
  try { var v = JSON.parse(localStorage.getItem(key)); return v !== null && v !== undefined ? v : def; }
  catch (e) { return def; }
}

function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}

function lsRemove(key) {
  try { localStorage.removeItem(key); } catch (e) {}
}

/* ══════════════════════════════════════════════════════════════
 *  SUPABASE CLIENT — zero dependencies, pure fetch
 * ══════════════════════════════════════════════════════════════ */

/** POST a row to a table */
function sbInsert(table, row) {
  return fetch(CONFIG.supabaseUrl + '/rest/v1/' + table, {
    method: 'POST',
    headers: {
      'apikey': CONFIG.supabaseKey,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(row),
  });
}

/** Call an RPC (PostgreSQL function) */
function sbRpc(fn, params) {
  return fetch(CONFIG.supabaseUrl + '/rest/v1/rpc/' + fn, {
    method: 'POST',
    headers: {
      'apikey': CONFIG.supabaseKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params || {}),
  });
}

/** SELECT rows from a table via Supabase REST API */
function sbSelect(table, opts) {
  var params = [];
  if (opts && opts.select) params.push('select=' + encodeURIComponent(opts.select));
  if (opts && opts.order)  params.push('order=' + encodeURIComponent(opts.order));
  if (opts && opts.limit)  params.push('limit=' + encodeURIComponent(opts.limit));
  var qs = params.length ? '?' + params.join('&') : '';
  return fetch(CONFIG.supabaseUrl + '/rest/v1/' + table + qs, {
    method: 'GET',
    headers: {
      'apikey': CONFIG.supabaseKey,
      'Accept': 'application/json',
    },
  });
}

/* ══════════════════════════════════════════════════════════════
 *  VISITOR ID — Persistent across browser sessions
 *  Stored in localStorage, survives tab closes, cache clears
 *  Only regenerates if user clears site data manually.
 * ══════════════════════════════════════════════════════════════ */

function getVisitorId() {
  var v = lsGet(VISITOR_KEY, null);
  if (!v) {
    v = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 16);
    lsSet(VISITOR_KEY, v);
  }
  return v;
}

/* ══════════════════════════════════════════════════════════════
 *  SESSION — Persisted in localStorage
 *  Resets on browser close (session storage would be ideal
 *  but we need it to survive SPA navigations).
 * ══════════════════════════════════════════════════════════════ */

function getSession() {
  var s = lsGet(SESSION_KEY, null);
  if (!s || !s.id) {
    s = {
      id:         crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 10),
      startTime:  Date.now(),
      totalStudyMs: 0,
      pages:      [],
    };
    lsSet(SESSION_KEY, s);
  }
  return s;
}

function saveSession(s) { lsSet(SESSION_KEY, s); }

/* ══════════════════════════════════════════════════════════════
 *  COURSE & TOPIC EXTRACTION — from URL pathname
 *  Returns { course: 'Microeconomics', topic: 'Consumer Theory' }
 *  Falls back gracefully for unknown paths.
 * ══════════════════════════════════════════════════════════════ */

var COURSE_PATTERNS = [
  { regex: /^\/501-Microeconomics(\/|$)/i,  name: 'Microeconomics' },
  { regex: /^\/microeconomics(\/|$)/i,       name: 'Microeconomics' },
  { regex: /^\/macroeconomics(\/|$)/i,        name: 'Macroeconomics' },
  { regex: /^\/503-Development(\/|$)/i,       name: 'Development' },
  { regex: /^\/development(\/|$)/i,           name: 'Development' },
  { regex: /^\/512-Political-Economy(\/|$)/i, name: 'Political Economy' },
  { regex: /^\/health-economics(\/|$)/i,      name: 'Health Economics' },
  { regex: /^\/econometrics(\/|$)/i,          name: 'Econometrics' },
];

/** Map of URL path segments to human-readable topic names */
var TOPIC_MAP = {
  // Microeconomics
  'answers-consumer-theory':      'Answers: Consumer Theory',
  'answers-demand-production':    'Answers: Demand & Production',
  'answers-welfare':              'Answers: Welfare',
  'answers-ge-game-extern-trade': 'Answers: GE, Game Theory & Trade',
  'exam-cheat-sheet':             'Exam Cheat Sheet',
  'exam-answer-template':         'Exam Answer Template',
  'exam-priority-matrix':         'Exam Priority Matrix',
  'exam-common-mistakes':         'Exam Common Mistakes',
  'exam-simulations':             'Exam Simulations',
  'study-roadmap':                'Study Roadmap',
  'welfare-change-reference':     'Welfare Change Reference',
  'answers-cross-reference':      'Cross-Reference',
  'answers-index':                'ANSWERS Index',
  'micro-questions-topic-wise-answered': 'Questions: By Topic (Answered)',
  'micro-questions-year-wise-answered':  'Questions: By Year (Answered)',
  'micro-questions-topic-wise':         'Questions: By Topic',
  'micro-questions-year-wise':          'Questions: By Year',
  'glossary':                     'Glossary',
  'resources':                    'Resources',
  'basics':                       'Course Basics',
  // Macroeconomics
  // (same key names work since URLs are unique)
  // Development
  'naila-kabeer':                 'Naila Kabeer',
  'venezuela':                    'Venezuela',
  'labour-force-survey':          'Labour Force Survey',
  'bangladesh-trade':             'Bangladesh Trade',
  // Political Economy
  'modernization-theory':         'Modernization Theory',
  'dependency-theory':            'Dependency Theory',
  'washington-consensus':         'Washington Consensus',
  'free-trade-agriculture':       'Free Trade in Agriculture',
  'food-crisis':                  'Food Crisis (Patnaik)',
  'bangladesh-dairy':             'Bangladesh Dairy',
  'rmg-sector':                   'RMG Sector',
  'cash-crops':                   'Cash Crops vs Food Crops',
  // Top-level sections
  'study-dashboard':              'Study Dashboard',
  'batch-finals':                 'Batch Finals',
  'exam-guides':                  'Exam Guides',
  'master-study-notes':           'Master Study Notes',
  'master_study_notes':           'Master Study Notes',
  'theorists-reference':          'Theorists Reference',
  'exam-frameworks':              'Exam Frameworks',
  'statistics-reference':         'Statistics Reference',
};

/** Clean a slug into a display name (e.g. "answers-consumer-theory" → "Answers: Consumer Theory") */
function slugToName(slug) {
  if (!slug) return '';
  // Check known map first
  var lower = slug.toLowerCase();
  if (TOPIC_MAP[lower]) return TOPIC_MAP[lower];
  // Fallback: replace hyphens, title-case
  return lower
    .split('-')
    .map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); })
    .join(' ');
}

function getCourseFromPath(path) {
  if (!path) return 'Other';
  var p = path.replace(/\/$/, '');
  for (var i = 0; i < COURSE_PATTERNS.length; i++) {
    if (COURSE_PATTERNS[i].regex.test(p)) return COURSE_PATTERNS[i].name;
  }
  // Fallback: first path segment
  var parts = p.split('/').filter(Boolean);
  if (parts.length > 0) {
    var first = parts[0];
    var match = first.match(/^\d+-([A-Za-z-]+)$/);
    if (match) return match[1].replace(/-/g, ' ');
    if (/^[A-Z]/.test(first)) return first.replace(/-/g, ' ');
  }
  return 'Other';
}

function getTopicFromPath(path, title) {
  if (!path) return title || 'General';
  var p = path.replace(/\/$/, '');
  var parts = p.split('/').filter(Boolean);

  // If there's a second segment, that's usually the topic area
  if (parts.length >= 2) {
    var topicSlug = parts[1].toLowerCase();
    // But skip known non-topic segments: "basics" under a course is the page itself
    if (TOPIC_MAP[topicSlug]) return TOPIC_MAP[topicSlug];
    // Skip utility segments that appear as second level
    if (['basics', 'readme', 'overview'].indexOf(topicSlug) >= 0) {
      // Use first segment as topic instead
      return slugToName(parts[0]);
    }
    return slugToName(topicSlug);
  }

  // Single segment paths: extract topic from title or slug
  if (parts.length === 1) {
    return slugToName(parts[0]);
  }

  // Root or unknown: use title if available
  if (title) {
    var cleaned = title.replace(/\s*-\s*Economics\s*Mastery\s*$/i, '').trim();
    if (cleaned) return cleaned;
  }

  return 'General';
}

/** Derive content type from path (answers, cheat-sheet, basics, etc.) */
function getContentTypeFromPath(path) {
  if (!path) return 'Other Pages';
  var p = path.toLowerCase();
  if (p.indexOf('answers-') >= 0 || p.indexOf('/answers-') >= 0)  return 'Answer Files';
  if (p.indexOf('cheat-sheet') >= 0)    return 'Cheat Sheets';
  if (p.indexOf('study-roadmap') >= 0)  return 'Study Roadmap';
  if (p.indexOf('simulation') >= 0)     return 'Simulations';
  if (p.indexOf('exam-') >= 0)           return 'Exam Resources';
  if (p.indexOf('/basics') >= 0 || p.indexOf('basics/') >= 0) return 'Basics';
  if (p.indexOf('glossary') >= 0)       return 'Glossary';
  if (p.indexOf('questions') >= 0)      return 'Question Banks';
  if (p.indexOf('cross-reference') >= 0) return 'Cross-References';
  if (p.indexOf('resources') >= 0)      return 'Resources';
  if (p.indexOf('batch-finals') >= 0)   return 'Batch Finals';
  if (p.indexOf('exam-guides') >= 0)    return 'Exam Guides';
  if (p.indexOf('master_study_notes') >= 0 || p.indexOf('master-study-notes') >= 0) return 'Master Notes';
  return 'Other Pages';
}

/* ══════════════════════════════════════════════════════════════
 *  TODAY STATS (global helper)
 * ══════════════════════════════════════════════════════════════ */
function getTodayStats() {
  return Promise.all([
    sbRpc('get_clicks_today').then(function (r) { return r.ok ? r.json() : null; }),
    sbRpc('get_study_ms_today').then(function (r) { return r.ok ? r.json() : null; }),
  ]).then(function (results) {
    return {
      clicks:  typeof results[0] === 'number' ? results[0] : 0,
      studyMs: typeof results[1] === 'number' ? results[1] : 0,
    };
  });
}

/* ══════════════════════════════════════════════════════════════
 *  GLOBAL API
 *  Exposed on window for external / debug access.
 * ══════════════════════════════════════════════════════════════ */
window.__studyLogger = {
  sbInsert: sbInsert,
  sbRpc: sbRpc,
  sbSelect: sbSelect,
  getSession: getSession,
  getCourseFromPath: getCourseFromPath,
  getTopicFromPath: getTopicFromPath,
  getTodayStats: getTodayStats,
  getVisitorId: getVisitorId,
  getContentTypeFromPath: getContentTypeFromPath,
  get sessionId() { return getSession().id; },
  get visitorId() { return getVisitorId(); },
};

/* ══════════════════════════════════════════════════════════════
 *  IIFE — Application code
 * ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Migrate: clear old storage keys from v1 ─────────────── */
  lsRemove('masters_visitor_log');
  lsRemove('masters_visitor_pages');
  lsRemove('masters_visitor_start');
  lsRemove('masters_unique_pages');
  // Remove v2 session key (replaced by v3)
  lsRemove('sl_v2_session');

  /* ══════════════════════════════════════════════════════════
   *  STATE (volatile — reset on each page navigation)
   * ══════════════════════════════════════════════════════════ */
  var gPageEnterTime  = null;    // timestamp when current page became visible
  var gCurrentPage    = null;    // current pathname
  var gCurrentTitle   = null;    // current page title
  var gLastLogTime    = 0;       // debounce for Supabase page view inserts
  var gLastClickMsgs  = {};      // per-session debounce map for click tracking
  var gHeartbeatTimer = null;    // interval ID for heartbeat
  var gLastHeartbeatMs = 0;      // accumulated ms at last heartbeat
  var gVisitorId      = getVisitorId();  // persistent across sessions

  /* ══════════════════════════════════════════════════════════
   *  GLOBAL: LOG PAGE VIEW → SUPABASE
   *  Debounced so quick SPA navigations don't spam.
   *  Now includes topic, visitor_id, content_type.
   * ══════════════════════════════════════════════════════════ */
  function logPageView(path, title) {
    var now = Date.now();
    if ((now - gLastLogTime) < CONFIG.PAGE_VIEW_DEBOUNCE) return;
    gLastLogTime = now;

    var session = getSession();
    var course  = getCourseFromPath(path);
    var topic   = getTopicFromPath(path, title);

    sbInsert('page_visits', {
      path:        path,
      title:       title,
      referrer:    document.referrer || null,
      session_id:  session.id,
      visitor_id:  gVisitorId,
      user_agent:  navigator.userAgent,
      topic:       topic,
    }).catch(function () { /* analytics never breaks the site */ });
  }

  /* ══════════════════════════════════════════════════════════
   *  GLOBAL: CLICK TRACKING (capture phase)
   *  Logs <a> clicks, now with topic + visitor_id.
   * ══════════════════════════════════════════════════════════ */
  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a');
    if (!anchor) return;

    var session  = getSession();
    var now      = Date.now();
    var last     = gLastClickMsgs[session.id] || 0;
    if ((now - last) < CONFIG.CLICK_DEBOUNCE) return;  // prevent double-clicks
    gLastClickMsgs[session.id] = now;

    var path     = window.location.pathname;
    var target   = anchor.href || anchor.getAttribute('href') || '';
    var course   = getCourseFromPath(path);
    var topic    = getTopicFromPath(path, document.title);

    sbInsert('click_events', {
      path:       path,
      target:     target,
      category:   course,
      topic:      topic,
      session_id: session.id,
      visitor_id: gVisitorId,
      user_agent: navigator.userAgent,
    }).catch(function () { /* analytics never breaks the site */ });
  }, true);

  /* ══════════════════════════════════════════════════════════
   *  SEARCH QUERY TRACKING
   *  Captures search terms when user submits a search.
   * ══════════════════════════════════════════════════════════ */
  function initSearchTracking() {
    var searchForm = document.forms && document.forms.search;
    if (!searchForm) return;
    var input = searchForm.query;
    if (!input) return;

    // MkDocs Material fires search on input blur with a non-empty value
    input.addEventListener('blur', function () {
      var q = (this.value || '').trim();
      if (!q) return;
      var session = getSession();
      sbInsert('search_queries', {
        query:       q,
        session_id:  session.id,
        visitor_id:  gVisitorId,
      }).catch(function () {});
    });
  }

  /* ══════════════════════════════════════════════════════════
   *  HEARTBEAT: Periodic study time sync
   *  Writes accumulated study ms to study_heartbeats every 60s.
   *  This ensures we NEVER lose more than 60s of data (vs.
   *  the old beforeunload-only approach).
   * ══════════════════════════════════════════════════════════ */
  function startHeartbeat() {
    if (gHeartbeatTimer) return;

    gHeartbeatTimer = setInterval(function () {
      var session = getSession();
      var now     = Date.now();
      var currentMs = gPageEnterTime !== null ? (now - gPageEnterTime) : 0;
      var totalMs   = session.totalStudyMs + currentMs;

      // Only send if there's new study time since last heartbeat
      if (totalMs <= gLastHeartbeatMs && gLastHeartbeatMs > 0) return;
      gLastHeartbeatMs = totalMs;

      var path   = window.location.pathname;
      var course = getCourseFromPath(path);
      var topic  = getTopicFromPath(path, document.title);

      sbInsert('study_heartbeats', {
        session_id:     session.id,
        visitor_id:     gVisitorId,
        course:         course,
        topic:          topic,
        accumulated_ms: totalMs,
        page_path:      path,
        page_title:     document.title,
      }).catch(function () {});
    }, CONFIG.HEARTBEAT_INTERVAL);
  }

  function stopHeartbeat() {
    if (gHeartbeatTimer) {
      clearInterval(gHeartbeatTimer);
      gHeartbeatTimer = null;
    }
  }

  /* ══════════════════════════════════════════════════════════
   *  GLOBAL: FETCH TOP 20 PAGES
   *  Cached for 60 s.
   * ══════════════════════════════════════════════════════════ */
  var topCache = null;

  function fetchTopPages() {
    if (topCache && (Date.now() - topCache.ts) < 60000) {
      return Promise.resolve(topCache.data);
    }

    return sbRpc('get_top_pages', { limit_count: 20 })
      .then(function (res) {
        if (!res.ok) throw new Error('Supabase RPC error: ' + res.status);
        return res.json();
      })
      .then(function (data) {
        var arr = data || [];
        topCache = { data: arr, ts: Date.now() };
        return arr;
      })
      .catch(function (err) {
        if (topCache) return topCache.data;
        console.warn('Study Logger: fetchTopPages failed', err);
        return [];
      });
  }

  /* ══════════════════════════════════════════════════════════
   *  LOCAL: STUDY TIME TRACKING
   *
   *  Study time = time the tab is VISIBLE (Page Visibility API).
   *  Hidden / idle time is NOT counted.
   * ══════════════════════════════════════════════════════════ */

  function startPageTracking(path, title) {
    finalizePageTracking();

    var session = getSession();
    gPageEnterTime = Date.now();
    gCurrentPage = path;
    gCurrentTitle = title;

    session.pages.push({
      path:       path,
      title:      title,
      enteredAt:  gPageEnterTime,
      studyMs:    0,
    });
    saveSession(session);

    logPageView(path, title);
  }

  function finalizePageTracking() {
    if (gPageEnterTime === null || !gCurrentPage) return;

    var now = Date.now();
    var visibleDelta = now - gPageEnterTime;

    var session = getSession();
    if (session.pages.length > 0) {
      var last = session.pages[session.pages.length - 1];
      last.studyMs += visibleDelta;
      last.scrollDepth = Math.round(
        ((window.scrollY + window.innerHeight) / Math.max(document.documentElement.scrollHeight, 1)) * 100
      );
    }
    session.totalStudyMs += visibleDelta;
    saveSession(session);

    gPageEnterTime = null;
    gCurrentPage = null;
  }

  function resumePageTracking() {
    gPageEnterTime = Date.now();
  }

  /* ══════════════════════════════════════════════════════════
   *  LOCAL: COMPUTE SESSION STATS
   * ══════════════════════════════════════════════════════════ */
  function computeSessionStats() {
    var session = getSession();
    var now = Date.now();

    var currentMs = gPageEnterTime !== null ? (now - gPageEnterTime) : 0;
    var totalMs   = session.totalStudyMs + currentMs;

    var pathMap = {};
    session.pages.forEach(function (p) {
      if (!pathMap[p.path]) {
        pathMap[p.path] = { path: p.path, title: p.title, studyMs: 0 };
      }
      pathMap[p.path].studyMs += p.studyMs || 0;
    });

    var breakdown = Object.keys(pathMap)
      .map(function (k) { return pathMap[k]; })
      .sort(function (a, b) { return b.studyMs - a.studyMs; });

    return {
      totalStudyMs:   totalMs,
      currentPageMs:  currentMs,
      pagesVisited:   session.pages.length,
      uniquePages:    breakdown.length,
      pageBreakdown:  breakdown,
      sessionStart:   session.startTime,
    };
  }

  /* ══════════════════════════════════════════════════════════
   *  UI FORMATTERS
   * ══════════════════════════════════════════════════════════ */
  function fmt(ms) {
    if (ms < 1000) return '0s';
    var sec = Math.floor(ms / 1000);
    if (sec < 60) return sec + 's';
    var min = Math.floor(sec / 60);
    var s = sec % 60;
    if (min < 60) return (min < 10 ? '0' : '') + min + 'm ' + (s < 10 ? '0' : '') + s + 's';
    var hr = Math.floor(min / 60);
    var m = min % 60;
    return hr + 'h ' + (m < 10 ? '0' : '') + m + 'm';
  }

  function fmtShort(ms) {
    if (ms < 1000) return '0s';
    var sec = Math.floor(ms / 1000);
    if (sec < 60) return sec + 's';
    var min = Math.floor(sec / 60);
    if (min < 60) return min + 'm';
    var hr = Math.floor(min / 60);
    return hr + 'h ' + (min % 60) + 'm';
  }

  function trunc(str, n) {
    return str.length > n ? str.slice(0, n) + '\u2026' : str;
  }

  function esc(str) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
  }

  /* ══════════════════════════════════════════════════════════
   *  WIDGET — DOM BUILDING (unchanged from v2)
   *  Floating bubble: collapsed = small circle, expanded = full card.
   * ══════════════════════════════════════════════════════════ */

  var STATE = { open: false, tab: 'popular' };

  function buildWidget() {
    var root  = ce('div', 'vl-root');

    var bubble = ce('div', 'vl-bubble');

    var preview = ce('div', 'vl-bubble-preview');
    var icon    = ce('span', 'vl-bubble-icon');
    icon.textContent = '\uD83D\uDCCA';
    var timeSpan = ce('span', 'vl-bubble-time');
    timeSpan.id = 'vl-bubble-time';
    timeSpan.textContent = '0m';
    preview.appendChild(icon);
    preview.appendChild(timeSpan);

    var content    = ce('div', 'vl-bubble-content');
    var header     = ce('div', 'vl-header');
    var titleSpan  = ce('span', 'vl-title');
    titleSpan.textContent = '\uD83D\uDCCA Study Logger';
    var closeBtn   = ce('button', 'vl-close-btn');
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.textContent = '\u2715';

    var tabs  = ce('div', 'vl-tabs');
    var tabP  = ce('button', 'vl-tab', 'vl-tab--active');
    tabP.setAttribute('data-tab', 'popular');
    tabP.textContent = '\uD83C\uDF0D Popular';
    var tabS  = ce('button', 'vl-tab');
    tabS.setAttribute('data-tab', 'session');
    tabS.textContent = '\uD83D\uDCDA My Session';
    var tabT  = ce('button', 'vl-tab');
    tabT.setAttribute('data-tab', 'today');
    tabT.textContent = '\uD83D\uDCC5 Today';
    var tabC  = ce('button', 'vl-tab');
    tabC.setAttribute('data-tab', 'courses');
    tabC.textContent = '\uD83D\uDCDA Courses';

    var body = ce('div', 'vl-body');
    body.id = 'vl-body';

    header.appendChild(titleSpan);
    header.appendChild(closeBtn);
    tabs.appendChild(tabP);
    tabs.appendChild(tabS);
    tabs.appendChild(tabT);
    tabs.appendChild(tabC);
    content.appendChild(header);
    content.appendChild(tabs);
    content.appendChild(body);

    bubble.appendChild(preview);
    bubble.appendChild(content);
    root.appendChild(bubble);
    document.body.appendChild(root);

    // Click bubble to open
    bubble.addEventListener('click', function (e) {
      if (STATE.open) return;
      openWidget();
    });

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeWidget();
    });

    tabs.addEventListener('click', function (e) {
      e.stopPropagation();
      onTabClick(e);
    });

    setInterval(function () {
      updateBubbleTime();
      if (STATE.open) render();
    }, 10000);

    updateBubbleTime();
  }

  function ce(tag, cls1, cls2) {
    var el = document.createElement(tag);
    if (cls1) el.className = cls1;
    if (cls2) el.classList.add(cls2);
    return el;
  }

  function openWidget() {
    STATE.open = true;
    document.querySelector('.vl-root').classList.add('vl-open');
    render();
  }

  function closeWidget() {
    STATE.open = false;
    document.querySelector('.vl-root').classList.remove('vl-open');
  }

  function updateBubbleTime() {
    var el = document.getElementById('vl-bubble-time');
    if (!el) return;
    var s = computeSessionStats();
    el.textContent = fmtShort(s.totalStudyMs);
  }

  function onTabClick(e) {
    var tab = e.target.closest('.vl-tab');
    if (!tab) return;
    var name = tab.getAttribute('data-tab');
    if (name === STATE.tab) return;
    STATE.tab = name;

    document.querySelectorAll('.vl-tab').forEach(function (t) {
      t.classList.toggle('vl-tab--active', t.getAttribute('data-tab') === name);
    });
    render();
  }

  /* ── RENDER dispatch ──────────────────────────────────── */
  function render() {
    var body = document.getElementById('vl-body');
    if (!body) return;
    body.innerHTML = '';
    if (STATE.tab === 'popular') renderPopular(body);
    else if (STATE.tab === 'session') renderSession(body);
    else if (STATE.tab === 'today') renderToday(body);
    else if (STATE.tab === 'courses') renderCourses(body);
  }

  /* ── Popular tab ───────────────────────────────────────── */
  function renderPopular(body) {
    body.innerHTML = '<div class="vl-loader">\u23F3 Loading\u2026</div>';

    fetchTopPages().then(function (pages) {
      if (!pages || pages.length === 0) {
        body.innerHTML = '<div class="vl-empty">No visits recorded yet.</div>';
        return;
      }

      var max = pages[0].visit_count;
      var h   = '<div class="vl-scroll">';

      pages.forEach(function (p, i) {
        var pct = Math.min((p.visit_count / max) * 100, 100);
        h +=
          '<div class="vl-row">' +
          '  <div class="vl-row-info">' +
          '    <span class="vl-rank">' + (i + 1) + '</span>' +
          '    <span class="vl-name">' + trunc(esc(p.title || p.path), 28) + '</span>' +
          '    <span class="vl-count">' + p.visit_count + '</span>' +
          '  </div>' +
          '  <div class="vl-bar"><div class="vl-fill" style="width:' + pct + '%"></div></div>' +
          '</div>';
      });

      h += '</div>';
      body.innerHTML = h;
    });
  }

  /* ── Session tab ───────────────────────────────────────── */
  function renderSession(body) {
    var s = computeSessionStats();

    var h =
      '<div class="vl-scroll">' +
      '<div class="vl-timer">' +
      '  <div class="vl-timer-value">' + fmt(s.totalStudyMs) + '</div>' +
      '  <div class="vl-timer-label">study time this session</div>' +
      '</div>' +
      '<div class="vl-mini-stats">' +
      '  <div class="vl-mini">' +
      '    <span class="vl-mini-value">' + fmtShort(s.currentPageMs) + '</span>' +
      '    <span class="vl-mini-label">current page</span>' +
      '  </div>' +
      '  <div class="vl-mini">' +
      '    <span class="vl-mini-value">' + s.pagesVisited + '</span>' +
      '    <span class="vl-mini-label">pages visited</span>' +
      '  </div>' +
      '  <div class="vl-mini">' +
      '    <span class="vl-mini-value">' + s.uniquePages + '</span>' +
      '    <span class="vl-mini-label">unique pages</span>' +
      '  </div>' +
      '</div>';

    if (s.pageBreakdown.length > 0) {
      h += '<div class="vl-divider"></div>' +
           '<div class="vl-subtitle">Time by page</div>';

      var maxTime = s.pageBreakdown[0].studyMs || 1;
      var show = s.pageBreakdown.slice(0, 10);
      show.forEach(function (p) {
        var pct = Math.min((p.studyMs / maxTime) * 100, 100);
        h +=
          '<div class="vl-row">' +
          '  <div class="vl-row-info">' +
          '    <span class="vl-name">' + trunc(esc(p.title || p.path), 28) + '</span>' +
          '    <span class="vl-time">' + fmtShort(p.studyMs) + '</span>' +
          '  </div>' +
          '  <div class="vl-bar"><div class="vl-fill vl-fill--session" style="width:' + pct + '%"></div></div>' +
          '</div>';
      });
    }

    h += '</div>';
    body.innerHTML = h;
  }

  /* ── Today tab ─────────────────────────────────────────── */
  function renderToday(body) {
    body.innerHTML = '<div class="vl-loader">\u23F3 Loading\u2026</div>';

    Promise.all([
      sbRpc('get_clicks_today').then(function (r) { return r.ok ? r.json() : null; }),
      sbRpc('get_study_ms_today').then(function (r) { return r.ok ? r.json() : null; }),
    ]).then(function (results) {
      // RPCs return scalar BIGINT (plain number), not objects
      var clicks  = typeof results[0] === 'number' ? results[0] : 0;
      var studyMs = typeof results[1] === 'number' ? results[1] : 0;

      if (!clicks && !studyMs) {
        body.innerHTML = '<div class="vl-empty">No activity recorded today.</div>';
        return;
      }

      var h =
        '<div class="vl-scroll">' +
        '  <div class="vl-mini-stats">' +
        '    <div class="vl-mini">' +
        '      <span class="vl-mini-value">' + clicks + '</span>' +
        '      <span class="vl-mini-label">clicks today</span>' +
        '    </div>' +
        '    <div class="vl-mini">' +
        '      <span class="vl-mini-value">' + fmtShort(studyMs) + '</span>' +
        '      <span class="vl-mini-label">study time today</span>' +
        '    </div>' +
        '  </div>' +
        '</div>';
      body.innerHTML = h;
    }).catch(function (err) {
      console.warn('Study Logger: renderToday failed', err);
      body.innerHTML = '<div class="vl-empty">Could not load today\u2019s stats.</div>';
    });
  }

  /* ── Courses tab ───────────────────────────────────────── */
  function renderCourses(body) {
    body.innerHTML = '<div class="vl-loader">\u23F3 Loading\u2026</div>';

    sbRpc('get_course_breakdown')
      .then(function (res) {
        if (!res.ok) throw new Error('Supabase RPC error: ' + res.status);
        return res.json();
      })
      .then(function (data) {
        var rows = data || [];
        if (rows.length === 0) {
          body.innerHTML = '<div class="vl-empty">No course data yet.</div>';
          return;
        }

        var maxStudy = 1;
        rows.forEach(function (r) { maxStudy = Math.max(maxStudy, r.total_visits || 0); });

        var h = '<div class="vl-scroll">';
        rows.forEach(function (r) {
          var courseName = r.course || r.category || 'Other';
          var visits     = r.total_visits || 0;
          var pct        = Math.min((visits / maxStudy) * 100, 100);
          h +=
            '<div class="vl-row">' +
            '  <div class="vl-row-info">' +
            '    <span class="vl-name">' + esc(courseName) + '</span>' +
            '    <span class="vl-count">' + visits + '</span>' +
            '  </div>' +
            '  <div class="vl-bar"><div class="vl-fill" style="width:' + pct + '%"></div></div>' +
            '</div>';
        });
        h += '</div>';
        body.innerHTML = h;
      })
      .catch(function (err) {
        console.warn('Study Logger: renderCourses failed', err);
        body.innerHTML = '<div class="vl-empty">Could not load course data.</div>';
      });
  }

  /* ══════════════════════════════════════════════════════════
   *  LIFECYCLE
   * ══════════════════════════════════════════════════════════ */

  function boot() {
    startPageTracking(window.location.pathname, document.title);
    initSearchTracking();
    startHeartbeat();
  }

  // 1. Initial page load
  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot);

  // 2. Visibility — count only visible time as study time
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      finalizePageTracking();
    } else {
      resumePageTracking();
    }
  });

  // 3. Unload — final heartbeat + sendBeacon for last session state
  window.addEventListener('beforeunload', function () {
    finalizePageTracking();
    stopHeartbeat();

    var session = getSession();
    var payload = JSON.stringify({
      session_id:     session.id,
      visitor_id:     gVisitorId,
      date:           new Date().toISOString().slice(0, 10),
      total_study_ms: session.totalStudyMs,
      pages_studied:  session.pages.length,
      started_at:     new Date(session.startTime).toISOString(),
    });

    var url  = CONFIG.supabaseUrl + '/rest/v1/study_sessions?apikey=' + encodeURIComponent(CONFIG.supabaseKey);
    var blob = new Blob([payload], { type: 'application/json' });
    navigator.sendBeacon(url, blob);
  });

  // 4. MkDocs SPA navigation — detect content swaps via MutationObserver
  document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('article.md-content__inner') ||
             document.querySelector('.md-content') ||
             document.querySelector('main');

    if (el) {
      var obs = new MutationObserver(function () {
        setTimeout(function () {
          if (document.title && document.visibilityState === 'visible') {
            startPageTracking(window.location.pathname, document.title);
          }
        }, 300);
      });
      obs.observe(el, { childList: true, subtree: true });
    }

    buildWidget();
  });
})();
