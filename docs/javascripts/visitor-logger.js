/**
 * Visitor Logger — Tracks page visits, time-on-page, scroll depth
 * Persists stats in localStorage. Shows a stylish floating widget.
 *
 * "Study what you track." — every economist ever
 */
(function () {
  'use strict';

  /* ── Constants ─────────────────────────────────────────────── */
  const STORAGE_KEY = 'masters_visitor_log';
  const SESSION_PAGES = 'masters_visitor_pages';
  const SESSION_START = 'masters_visitor_start';

  /* ── Storage helpers ────────────────────────────────────────── */
  function getLog() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { pageStats: {} };
    } catch {
      return { pageStats: {} };
    }
  }

  function saveLog(log) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
  }

  function getPageList() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_PAGES)) || [];
    } catch {
      return [];
    }
  }

  function savePageList(pages) {
    sessionStorage.setItem(SESSION_PAGES, JSON.stringify(pages));
  }

  function getSessionStart() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_START));
    } catch {
      return null;
    }
  }

  function setSessionStart() {
    if (!sessionStorage.getItem(SESSION_START)) {
      sessionStorage.setItem(SESSION_START, JSON.stringify(Date.now()));
    }
  }

  /* ── Core tracking ──────────────────────────────────────────── */
  function trackPage() {
    const now = Date.now();
    const log = getLog();
    const path = window.location.pathname;
    const title = document.title;

    // Initialise page stat entry
    if (!log.pageStats[path]) {
      log.pageStats[path] = { visits: 0, totalMs: 0, title: title };
    }
    log.pageStats[path].visits += 1;
    saveLog(log);

    // Track current page entry in session
    const pages = getPageList();
    pages.push({ path, title, enteredAt: now });
    savePageList(pages);

    // Session start
    setSessionStart();

    // Mark entry for time-on-page
    window.__visitorPageEnter = now;
  }

  function finalizePage() {
    const entered = window.__visitorPageEnter;
    if (!entered) return;

    const now = Date.now();
    const elapsed = now - entered;
    const path = window.location.pathname;

    const log = getLog();
    if (log.pageStats[path]) {
      log.pageStats[path].totalMs += elapsed;
      saveLog(log);
    }

    // Update last page in session list with duration
    const pages = getPageList();
    if (pages.length > 0) {
      const last = pages[pages.length - 1];
      last.durationMs = (now - last.enteredAt);
      last.scrollDepth = Math.round(
        ((window.scrollY + window.innerHeight) / Math.max(document.documentElement.scrollHeight, 1)) * 100
      );
      savePageList(pages);
    }

    window.__visitorPageEnter = null;
  }

  /* ── Stats computation ──────────────────────────────────────── */
  function computeStats() {
    const log = getLog();
    const pages = getPageList();
    const sessionStart = getSessionStart();

    const entries = Object.entries(log.pageStats || {})
      .map(([path, stat]) => ({ path, ...stat }))
      .sort((a, b) => b.totalMs - a.totalMs);

    const totalAllMs = entries.reduce((s, e) => s + e.totalMs, 0);
    const totalAllVisits = entries.reduce((s, e) => s + e.visits, 0);

    const sessionPages = pages.length;
    const sessionDuration = sessionStart ? (Date.now() - sessionStart) : 0;
    const currentPageDuration = window.__visitorPageEnter
      ? (Date.now() - window.__visitorPageEnter)
      : 0;

    // Top pages by time
    const top5 = entries.slice(0, 5);

    return {
      entries,
      totalAllMs,
      totalAllVisits,
      sessionPages,
      sessionDuration,
      currentPageDuration,
      top5,
    };
  }

  /* ── UI ──────────────────────────────────────────────────────── */
  function formatDuration(ms) {
    if (ms < 1000) return '0s';
    const sec = Math.floor(ms / 1000);
    if (sec < 60) return sec + 's';
    const min = Math.floor(sec / 60);
    const s = sec % 60;
    if (min < 60) return min + 'm ' + s + 's';
    const hr = Math.floor(min / 60);
    const m = min % 60;
    return hr + 'h ' + m + 'm';
  }

  function formatDurationShort(ms) {
    if (ms < 1000) return '0s';
    const sec = Math.floor(ms / 1000);
    if (sec < 60) return sec + 's';
    const min = Math.floor(sec / 60);
    if (min < 60) return min + 'm';
    const hr = Math.floor(min / 60);
    const m = min % 60;
    return hr + 'h ' + m + 'm';
  }

  function truncate(str, len) {
    return str.length > len ? str.slice(0, len) + '…' : str;
  }

  var WIDGET_OPEN = false;

  function buildWidget() {
    // ── Container ──
    var container = document.createElement('div');
    container.id = 'vl-container';

    // ── Toggle button ──
    var toggle = document.createElement('button');
    toggle.id = 'vl-toggle';
    toggle.setAttribute('aria-label', 'Toggle visitor stats');
    toggle.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>';
    toggle.addEventListener('click', function () {
      WIDGET_OPEN = !WIDGET_OPEN;
      container.classList.toggle('vl-open', WIDGET_OPEN);
      if (WIDGET_OPEN) refreshPanel();
    });

    // ── Panel ──
    var panel = document.createElement('div');
    panel.id = 'vl-panel';

    var header = document.createElement('div');
    header.className = 'vl-header';
    header.innerHTML =
      '<span class="vl-header-title">📊 Study Logger</span>' +
      '<button class="vl-close" aria-label="Close">✕</button>';
    header.querySelector('.vl-close').addEventListener('click', function () {
      WIDGET_OPEN = false;
      container.classList.remove('vl-open');
    });

    var body = document.createElement('div');
    body.className = 'vl-body';
    body.id = 'vl-body';

    panel.appendChild(header);
    panel.appendChild(body);
    container.appendChild(toggle);
    container.appendChild(panel);
    document.body.appendChild(container);

    // Periodically refresh panel & track time
    setInterval(function () {
      if (WIDGET_OPEN) refreshPanel();
    }, 5000);
  }

  function refreshPanel() {
    var body = document.getElementById('vl-body');
    if (!body) return;
    var stats = computeStats();

    body.innerHTML =
      '<div class="vl-section">' +
      '  <div class="vl-stat-row">' +
      '    <span class="vl-stat-label">This session</span>' +
      '    <span class="vl-stat-value">' +
           stats.sessionPages + ' pages · ' + formatDurationShort(stats.sessionDuration) +
    '    </span>' +
    '  </div>' +
    '  <div class="vl-stat-row">' +
    '    <span class="vl-stat-label">Current page</span>' +
    '    <span class="vl-stat-value">' + formatDurationShort(stats.currentPageDuration) + '</span>' +
    '  </div>' +
    '  <div class="vl-stat-row">' +
    '    <span class="vl-stat-label">All time</span>' +
    '    <span class="vl-stat-value">' +
           stats.totalAllVisits + ' visits · ' + formatDurationShort(stats.totalAllMs) +
    '    </span>' +
    '  </div>' +
    '</div>' +
    '<div class="vl-section">' +
    '  <div class="vl-section-title">Top pages</div>';

    var maxTime = stats.top5.length > 0 ? stats.top5[0].totalMs : 1;
    stats.top5.forEach(function (page) {
      var pct = Math.min((page.totalMs / maxTime) * 100, 100);
      body.innerHTML +=
        '<div class="vl-page-row">' +
        '  <div class="vl-page-info">' +
        '    <span class="vl-page-name">' + truncate(page.title || page.path, 28) + '</span>' +
        '    <span class="vl-page-time">' + formatDurationShort(page.totalMs) + '</span>' +
        '  </div>' +
        '  <div class="vl-bar-track">' +
        '    <div class="vl-bar-fill" style="width:' + pct + '%"></div>' +
        '  </div>' +
        '</div>';
    });

    if (stats.top5.length === 0) {
      body.innerHTML += '<div class="vl-empty">No pages tracked yet — start studying!</div>';
    }

    body.innerHTML += '</div>';
  }

  /* ── Lifecycle hooks ────────────────────────────────────────── */

  // Track on initial page load
  if (document.readyState === 'complete') {
    trackPage();
  } else {
    window.addEventListener('load', trackPage);
  }

  // Finalize on page unload / visibility change
  window.addEventListener('beforeunload', finalizePage);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      finalizePage();
    } else if (document.visibilityState === 'visible') {
      // Re-track when coming back
      if (!window.__visitorPageEnter) {
        trackPage();
      }
    }
  });

  // Track scroll depth during page stay
  var scrollTimer = null;
  window.addEventListener('scroll', function () {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      if (window.__visitorPageEnter) {
        const pages = getPageList();
        if (pages.length > 0) {
          const last = pages[pages.length - 1];
          last.scrollDepth = Math.round(
            ((window.scrollY + window.innerHeight) / Math.max(document.documentElement.scrollHeight, 1)) * 100
          );
          savePageList(pages);
        }
      }
    }, 500);
  });

  // MkDocs Material navigation hook: re-track on page change
  document.addEventListener('DOMContentLoaded', function () {
    // Observe the main content area for changes (MkDocs swaps content via XHR)
    var contentEl = document.querySelector('article.md-content__inner') ||
                     document.querySelector('.md-content') ||
                     document.querySelector('main');
    if (contentEl) {
      var observer = new MutationObserver(function () {
        // Debounce: page transition settled
        setTimeout(function () {
          if (document.title && document.visibilityState === 'visible') {
            finalizePage();
            trackPage();
          }
        }, 300);
      });
      observer.observe(contentEl, { childList: true, subtree: true });
    }

    // Build the widget UI
    buildWidget();
  });
})();
