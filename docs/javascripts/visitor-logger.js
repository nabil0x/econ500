/**
 * Study Logger v2 — Global analytics + Local session study time
 *
 * GLOBAL:  Logs page views to Supabase → shows top 20 pages across all visitors
 * LOCAL:   Tracks study time per session using the Page Visibility API
 *
 * Architecture:
 *   Browser ↔ Supabase REST API (anon key, RLS-protected)
 *   Browser → localStorage (session state, no sensitive data)
 *
 * "Study what you track." — every economist ever
 *
 * ── Supabase Setup (run in Supabase SQL Editor) ─────────────────
 * See file: SUPABASE_SETUP.md
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
};

/* ══════════════════════════════════════════════════════════════
 *  LOCAL STORAGE HELPERS
 * ══════════════════════════════════════════════════════════════ */
var SESSION_KEY = 'sl_v2_session';

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
 *  SESSION
 *  Persisted in localStorage so it survives page navigations
 *  within the MkDocs SPA shell.
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
 *  COURSE BUCKET UTILITY
 *  Extracts the course name from a URL pathname.
 * ══════════════════════════════════════════════════════════════ */
function getCourseFromPath(path) {
  if (!path) return 'Other';
  // Strip trailing slash for consistent matching
  var p = path.replace(/\/$/, '');
  if (/^\/501-Microeconomics(\/|$)/.test(p) || /^\/microeconomics(\/|$)/.test(p)) return 'Microeconomics';
  if (/^\/macroeconomics(\/|$)/.test(p)) return 'Macroeconomics';
  if (/^\/503-Development(\/|$)/.test(p) || /^\/development(\/|$)/.test(p)) return 'Development';
  if (/^\/512-Political-Economy(\/|$)/.test(p)) return 'Political Economy';
  if (/^\/health-economics(\/|$)/.test(p)) return 'Health Economics';
  if (/^\/econometrics(\/|$)/.test(p)) return 'Econometrics';
  // Fallback: try to derive from the first path segment
  var parts = p.split('/').filter(Boolean);
  if (parts.length > 0) {
    var first = parts[0];
    // Match patterns like "501-Microeconomics" or "512-Political-Economy"
    var match = first.match(/^\d+-([A-Za-z-]+)$/);
    if (match) {
      return match[1].replace(/-/g, ' ');
    }
    // Try capitalized single-word match
    if (/^[A-Z]/.test(first)) {
      return first.replace(/-/g, ' ');
    }
  }
  return 'Other';
}

/* ══════════════════════════════════════════════════════════════
 *  TODAY STATS (global helper)
 *  Returns a promise with today's aggregated stats.
 * ══════════════════════════════════════════════════════════════ */
function getTodayStats() {
  return Promise.all([
    sbRpc('get_clicks_today').then(function (r) { return r.ok ? r.json() : null; }),
    sbRpc('get_study_ms_today').then(function (r) { return r.ok ? r.json() : null; }),
  ]).then(function (results) {
    return { clicks: results[0], studyMs: results[1] };
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
  getTodayStats: getTodayStats,
  get sessionId() { return getSession().id; },
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

  /* ══════════════════════════════════════════════════════════
   *  STATE (volatile — reset on each page navigation)
   * ══════════════════════════════════════════════════════════ */
  var gPageEnterTime = null;    // timestamp when current page became visible
  var gCurrentPage   = null;    // current pathname
  var gLastLogTime   = 0;       // debounce for Supabase inserts
  var gLastClickMsgs = {};      // per-session debounce map for click tracking (400ms)

  /* ══════════════════════════════════════════════════════════
   *  GLOBAL: LOG PAGE VIEW → SUPABASE
   *  Debounced (2 s) so quick navigations don't spam.
   * ══════════════════════════════════════════════════════════ */
  function logPageView(path, title) {
    var now = Date.now();
    if ((now - gLastLogTime) < 2000) return;
    gLastLogTime = now;

    var session = getSession();

    sbInsert('page_visits', {
      path:       path,
      title:      title,
      referrer:   document.referrer || null,
      session_id: session.id,
      user_agent: navigator.userAgent,
    }).catch(function () { /* analytics never breaks the site */ });
  }

  /* ══════════════════════════════════════════════════════════
   *  GLOBAL: CLICK TRACKING (capture phase)
   *  Logs <a> clicks to click_events table, throttled at 5 s.
   * ══════════════════════════════════════════════════════════ */
  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a');
    if (!anchor) return;

    var session  = getSession();
    var now      = Date.now();
    var last     = gLastClickMsgs[session.id] || 0;
    if ((now - last) < 400) return;  // per-session debounce: prevent accidental double-clicks
    gLastClickMsgs[session.id] = now;

    var path     = window.location.pathname;
    var target   = anchor.href || anchor.getAttribute('href') || '';
    var category = getCourseFromPath(path);

    sbInsert('click_events', {
      path:       path,
      target:     target,
      category:   category,
      session_id: session.id,
      user_agent: navigator.userAgent,
    }).catch(function () { /* analytics never breaks the site */ });
  }, true);

  /* ══════════════════════════════════════════════════════════
   *  GLOBAL: FETCH TOP 20 PAGES
   *  Cached for 60 s so repeated widget refreshes don't hammer API.
   * ══════════════════════════════════════════════════════════ */
  var topCache = null;

  function fetchTopPages() {
    // Return cache if fresh (< 60 s)
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
        // If cache exists, serve stale rather than nothing
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
   *
   *  Flow:
   *    navigate → startPageTracking()     sets pageEnterTime = now
   *    tab hide → finalizePageTracking()  adds (now - enter) to total
   *    tab show → resumePageTracking()    resets pageEnterTime = now
   *    navigate → startPageTracking()     finalizes previous, resets
   * ══════════════════════════════════════════════════════════ */

  /** Start tracking a new page (call on navigation / load) */
  function startPageTracking(path, title) {
    // Finalise whichever page we were on before
    finalizePageTracking();

    var session = getSession();
    gPageEnterTime = Date.now();
    gCurrentPage = path;

    // Record page entry in session
    session.pages.push({
      path:       path,
      title:      title,
      enteredAt:  gPageEnterTime,
      studyMs:    0,
    });
    saveSession(session);

    // Fire-and-forget global log
    logPageView(path, title);
  }

  /** Finalise the current page: accumulate visible time */
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

  /** Resume after tab becomes visible again */
  function resumePageTracking() {
    gPageEnterTime = Date.now();
    // Update the session record so currentPageStart is in sync
    var session = getSession();
    saveSession(session);
  }

  /* ══════════════════════════════════════════════════════════
   *  LOCAL: COMPUTE SESSION STATS
   * ══════════════════════════════════════════════════════════ */
  function computeSessionStats() {
    var session = getSession();
    var now = Date.now();

    var currentMs = gPageEnterTime !== null ? (now - gPageEnterTime) : 0;
    var totalMs   = session.totalStudyMs + currentMs;

    // Aggregate per-path
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
   *  WIDGET — DOM BUILDING
   *  Single clickable bubble: collapsed = small circle,
   *  expanded = full card. No separate toggle button.
   * ══════════════════════════════════════════════════════════ */

  var STATE = { open: false, tab: 'popular' };

  function buildWidget() {
    var root  = ce('div', 'vl-root');

    // ── Bubble container (replaces old toggle + panel) ─────
    var bubble = ce('div', 'vl-bubble');

    // Preview — shown when collapsed
    var preview = ce('div', 'vl-bubble-preview');
    var icon    = ce('span', 'vl-bubble-icon');
    icon.textContent = '\uD83D\uDCCA';
    var timeSpan = ce('span', 'vl-bubble-time');
    timeSpan.id = 'vl-bubble-time';
    timeSpan.textContent = '0m';
    preview.appendChild(icon);
    preview.appendChild(timeSpan);

    // Full content — shown when expanded
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

    // Assemble content panel
    header.appendChild(titleSpan);
    header.appendChild(closeBtn);
    tabs.appendChild(tabP);
    tabs.appendChild(tabS);
    tabs.appendChild(tabT);
    tabs.appendChild(tabC);
    content.appendChild(header);
    content.appendChild(tabs);
    content.appendChild(body);

    // Assemble bubble
    bubble.appendChild(preview);
    bubble.appendChild(content);
    root.appendChild(bubble);
    document.body.appendChild(root);

    // ── Events ─────────────────────────────────────────────

    // Click bubble to open (when collapsed)
    bubble.addEventListener('click', function (e) {
      if (STATE.open) return;
      openWidget();
    });

    // Close button collapses the bubble
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeWidget();
    });

    // Tab switching
    tabs.addEventListener('click', function (e) {
      e.stopPropagation();
      onTabClick(e);
    });

    // Periodic refresh
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

  /* ── Widget event handlers ──────────────────────────────── */
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

  /* ══════════════════════════════════════════════════════════
   *  RENDER — dispatch to active tab
   * ══════════════════════════════════════════════════════════ */
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

      // Main timer — big and prominent
      '<div class="vl-timer">' +
      '  <div class="vl-timer-value">' + fmt(s.totalStudyMs) + '</div>' +
      '  <div class="vl-timer-label">study time this session</div>' +
      '</div>' +

      // Stats row
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

    // Per-page breakdown
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
      var clicksData = results[0];
      var studyData  = results[1];

      // Normalise: RPC may return an array (one row) or a bare object
      function extractVal(data, field) {
        if (!data) return 0;
        if (Array.isArray(data)) return (data[0] && data[0][field]) || 0;
        return data[field] || 0;
      }

      var clicks  = extractVal(clicksData, 'count');
      var studyMs = extractVal(studyData, 'study_ms');

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
        rows.forEach(function (r) { maxStudy = Math.max(maxStudy, r.total_study_ms || 0); });

        var h = '<div class="vl-scroll">';
        rows.forEach(function (r) {
          var courseName = r.course || r.category || 'Other';
          var studyMs    = r.total_study_ms || 0;
          var pct        = Math.min((studyMs / maxStudy) * 100, 100);
          h +=
            '<div class="vl-row">' +
            '  <div class="vl-row-info">' +
            '    <span class="vl-name">' + esc(courseName) + '</span>' +
            '    <span class="vl-time">' + fmtShort(studyMs) + '</span>' +
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

  // 1. Initial page load
  function boot() {
    startPageTracking(window.location.pathname, document.title);
  }
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

  // 3. Unload — save any pending time (+ POST to Supabase via sendBeacon)
  window.addEventListener('beforeunload', function () {
    finalizePageTracking();

    var session = getSession();
    var payload = JSON.stringify({
      session_id:     session.id,
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

    // Build widget
    buildWidget();
  });
})();
