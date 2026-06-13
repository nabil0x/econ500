/**
 * Study Dashboard — Full-page analytics dashboard
 * Renders into <div id="study-dashboard"> element on the MkDocs study-dashboard page.
 *
 * Dependencies:
 *   - window.__studyLogger (from docs/javascripts/visitor-logger.js)
 *     provides sbRpc(fn, params) and lsGet(key, def)
 *   - Canvas 2D API (no external libraries)
 *
 * Class naming convention (CSS handled separately):
 *   ds-grid, ds-card, ds-card-value, ds-card-label,
 *   ds-chart-container, ds-section, ds-section-title,
 *   ds-row, ds-row-label, ds-row-value,
 *   ds-bar-track, ds-bar-fill
 */
(function () {
  'use strict';

  /* ── Guard: only render on the dashboard page ──────── */
  var container = document.getElementById('study-dashboard');
  if (!container) return;

  /* ── Guard: check dependency ────────────────────────── */
  var logger = window.__studyLogger;
  if (!logger || typeof logger.sbRpc !== 'function') {
    container.innerHTML = '<p class="ds-error">Dashboard requires <code>visitor-logger.js</code> to be loaded.</p>';
    return;
  }

  var sbRpc   = logger.sbRpc;
  var sbSelect = logger.sbSelect;
  var lsGet = logger.lsGet || function (key, def) {
    try {
      var v = JSON.parse(localStorage.getItem(key));
      return v !== null && v !== undefined ? v : def;
    } catch (e) { return def; }
  };

  /* ── RPC wrapper ───────────────────────────────────── */
  function rpc(fn, params) {
    return sbRpc(fn, params).then(function (res) {
      if (!res.ok) throw new Error('RPC ' + fn + ': ' + res.status);
      return res.json();
    });
  }

  /* ── DOM helpers ────────────────────────────────────── */
  function el(tag, className) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    return e;
  }

  function clear(el) {
    el.innerHTML = '';
  }

  function esc(str) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(str));
    return d.innerHTML;
  }

  function showEmpty(parent) {
    parent.innerHTML = '<div class="ds-empty">\uD83D\uDCD6 No data yet. Start studying to see your stats!</div>';
  }

  function showLoading(parent) {
    parent.innerHTML = '<div class="ds-loading">\u23F3 Loading\u2026</div>';
  }

  /* ── Format helpers ─────────────────────────────────── */
  function fmtHours(ms) {
    if (ms == null || ms === 0) return '0';
    return (ms / 3600000).toFixed(1);
  }

  function fmtMinutes(ms) {
    if (ms == null || ms === 0) return '0';
    return Math.round(ms / 60000);
  }

  function dayName(dateStr) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var d = new Date(dateStr + 'T00:00:00');
    return days[d.getDay()];
  }

  /* ── Build dashboard skeleton ───────────────────────── */
  function buildSkeleton() {
    var html =
      '<div class="ds-container">' +

        /* ════ Stats Grid ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Overview</h2>' +
          '<div class="ds-grid">' +
            '<div class="ds-card">' +
              '<div class="ds-card-value" id="ds-val-clicks">—</div>' +
              '<div class="ds-card-label">Total Clicks</div>' +
            '</div>' +
            '<div class="ds-card">' +
              '<div class="ds-card-value" id="ds-val-hours">—</div>' +
              '<div class="ds-card-label">Study Hours</div>' +
            '</div>' +
            '<div class="ds-card">' +
              '<div class="ds-card-value" id="ds-val-streak">—</div>' +
              '<div class="ds-card-label">Day Streak</div>' +
            '</div>' +
            '<div class="ds-card">' +
              '<div class="ds-card-value" id="ds-val-today">—</div>' +
              '<div class="ds-card-label">Today\u2019s Minutes</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        /* ════ 7-Day Activity Chart ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">7-Day Activity</h2>' +
          '<div class="ds-chart-container">' +
            '<canvas id="ds-chart-canvas" height="200"></canvas>' +
          '</div>' +
        '</div>' +

        /* ════ Course Breakdown ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Course Breakdown</h2>' +
          '<div id="ds-course-section"></div>' +
        '</div>' +

        /* ════ Most Studied Pages ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Most Studied Pages</h2>' +
          '<div id="ds-pages-section"></div>' +
        '</div>' +

        /* ════ Session History ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Recent Session</h2>' +
          '<div id="ds-session-section"></div>' +
        '</div>' +

        /* ════ My Click Activity ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">\u{1F4A5} My Click Activity</h2>' +
          '<div id="ds-myclicks-stats" class="ds-clicks-stats"></div>' +
          '<div id="ds-myclicks-pages"></div>' +
          '<div id="ds-myclicks-log"></div>' +
        '</div>' +

        /* ════ Most Clicked Pages ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">\u{1F4CA} Most Clicked Pages</h2>' +
          '<div id="ds-topclicks-section"></div>' +
        '</div>' +

        /* ════ Live Data Feed ════ */
        '<div class="ds-section ds-debug">' +
          '<div class="ds-debug-header">' +
            '<span class="ds-debug-header-label">\u{1F4CA} Live Data Feed</span>' +
            '<span class="ds-debug-header-badge" id="ds-debug-badge"></span>' +
          '</div>' +
          '<p class="ds-debug-hint">Live records pulled from the database. ' +
          'Expand a table to inspect raw rows.</p>' +
          '<div id="ds-debug-tables"></div>' +
        '</div>' +

      '</div>';

    container.innerHTML = html;
  }

  /* ── Render stats grid ──────────────────────────────── */
  function renderStats(data) {
    setText('ds-val-clicks', data.totalClicks != null ? String(data.totalClicks) : '\u2014');
    setText('ds-val-hours', data.totalHours != null ? String(data.totalHours) : '\u2014');
    setText('ds-val-streak', data.streak != null ? String(data.streak) : '\u2014');
    setText('ds-val-today', data.todayMinutes != null ? String(data.todayMinutes) : '\u2014');
  }

  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  /* ── Draw 7-day bar chart (Canvas 2D) ───────────────── */
  var chartDataCache = null;

  function drawChart(data) {
    var canvas = document.getElementById('ds-chart-canvas');
    if (!canvas) return;

    chartDataCache = data;

    var chartData = (data || []).map(function (d) {
      return {
        day:     dayName(d.date),
        minutes: Math.round((d.study_ms || 0) / 60000),
      };
    });

    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;

    /* Size canvas to parent width */
    var parent = canvas.parentElement;
    var logicalW = parent.clientWidth || 600;
    var logicalH = 200;
    canvas.width  = logicalW * dpr;
    canvas.height = logicalH * dpr;
    canvas.style.width  = logicalW + 'px';
    canvas.style.height = logicalH + 'px';
    ctx.scale(dpr, dpr);

    /* Clear */
    ctx.clearRect(0, 0, logicalW, logicalH);

    /* Empty state */
    if (!chartData.length) {
      ctx.fillStyle = '#999';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('No activity data yet', logicalW / 2, logicalH / 2);
      return;
    }

    /* Layout */
    var pad = { top: 24, right: 12, bottom: 28, left: 12 };
    var chartW = logicalW - pad.left - pad.right;
    var chartH = logicalH - pad.top - pad.bottom;
    var baseY  = logicalH - pad.bottom;

    var maxVal = Math.max.apply(null, chartData.map(function (d) { return d.minutes; })) || 1;
    var count  = chartData.length;
    var gap    = 6;
    var barW   = Math.max((chartW - gap * (count - 1)) / count, 4);

    /* Baseline */
    ctx.save();
    ctx.strokeStyle = 'rgba(128,128,128,0.25)';
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.moveTo(pad.left, baseY + 0.5);
    ctx.lineTo(logicalW - pad.right, baseY + 0.5);
    ctx.stroke();
    ctx.restore();

    /* Draw bars */
    chartData.forEach(function (d, i) {
      var x    = pad.left + i * (barW + gap);
      var barH = (d.minutes / maxVal) * chartH;
      var y    = baseY - barH;

      /* Gradient: top = accent (#009688), bottom = primary (#3f51b5) */
      var grad = ctx.createLinearGradient(x, baseY, x, y);
      grad.addColorStop(0, '#3f51b5');
      grad.addColorStop(1, '#009688');

      /* Rounded top corners */
      var radius = Math.min(4, barW / 2);
      ctx.beginPath();
      ctx.moveTo(x, baseY);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.lineTo(x + barW - radius, y);
      ctx.quadraticCurveTo(x + barW, y, x + barW, y + radius);
      ctx.lineTo(x + barW, baseY);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      /* Value label above bar */
      ctx.fillStyle = '#666';
      ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(d.minutes, x + barW / 2, y - 2);

      /* Day label below */
      ctx.fillStyle = '#888';
      ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(d.day, x + barW / 2, baseY + 6);
    });
  }

  function redrawChart() {
    /* Re-read canvas size and redraw from cache */
    var canvas = document.getElementById('ds-chart-canvas');
    if (!canvas) return;
    drawChart(chartDataCache);
  }

  /* ── Render course breakdown ────────────────────────── */
  function renderCourses(data) {
    var section = document.getElementById('ds-course-section');
    if (!section) return;
    clear(section);

    var courses = data || [];
    if (!courses.length) {
      showEmpty(section);
      return;
    }

    /* Sort by visit count descending */
    courses.sort(function (a, b) {
      return (b.total_visits || 0) - (a.total_visits || 0);
    });

    var maxVal = Math.max.apply(null, courses.map(function (c) { return c.total_visits || 0; })) || 1;

    courses.forEach(function (c) {
      var pct = Math.min(((c.total_visits || 0) / maxVal) * 100, 100);
      var row = el('div', 'ds-row');
      row.innerHTML =
        '<span class="ds-row-label">' + esc(c.course_name || c.course || 'Unknown') + '</span>' +
        '<span class="ds-row-value">' + (c.total_visits || 0) + ' visits</span>' +
        '<div class="ds-bar-track"><div class="ds-bar-fill" style="width:' + pct.toFixed(1) + '%"></div></div>';
      section.appendChild(row);
    });
  }

  /* ── Render my click activity ───────────────────────── */
  function renderMyClicks(stats, topPages, recentClicks) {
    var statsEl = document.getElementById('ds-myclicks-stats');
    var pagesEl = document.getElementById('ds-myclicks-pages');
    var logEl   = document.getElementById('ds-myclicks-log');
    if (!statsEl) return;

    /* Stats row */
    var totalClicks = (stats && stats.total_clicks) || 0;
    var uniquePages = (stats && stats.unique_pages_clicked) || 0;
    statsEl.innerHTML =
      '<div class="ds-clicks-stat">' +
        '<span class="ds-clicks-stat-value">' + totalClicks + '</span>' +
        '<span class="ds-clicks-stat-label">your total clicks</span>' +
      '</div>' +
      '<div class="ds-clicks-stat">' +
        '<span class="ds-clicks-stat-value">' + uniquePages + '</span>' +
        '<span class="ds-clicks-stat-label">unique pages clicked</span>' +
      '</div>';

    /* Top pages for this user */
    if (!pagesEl) return;
    clear(pagesEl);
    var pages = topPages || [];
    if (pages.length > 0) {
      var maxClicks = pages[0].click_count || 1;
      var h = '<div class="ds-section-subtitle">Your most-clicked pages</div>';
      pages.forEach(function (p) {
        var pct = Math.min(((p.click_count || 0) / maxClicks) * 100, 100);
        h +=
          '<div class="ds-row">' +
          '  <span class="ds-row-label">' + esc(p.path || 'Unknown') + '</span>' +
          '  <span class="ds-row-value">' + p.click_count + ' clicks</span>' +
          '  <div class="ds-bar-track"><div class="ds-bar-fill" style="width:' + pct.toFixed(1) + '%"></div></div>' +
          '</div>';
      });
      pagesEl.innerHTML = h;
    }

    /* Recent click log */
    if (!logEl) return;
    clear(logEl);
    var clicks = recentClicks || [];
    if (clicks.length > 0) {
      var logH = '<div class="ds-section-subtitle">Recent clicks</div><div class="ds-clicks-log">';
      clicks.forEach(function (c) {
        logH +=
          '<div class="ds-click-entry">' +
          '  <span class="ds-click-path" title="' + esc(c.path || '') + '">' + esc(truncPath(c.path)) + '</span>' +
          '  <span class="ds-click-arrow">\u2192</span>' +
          '  <span class="ds-click-target" title="' + esc(c.target || '') + '">' + esc(truncPath(c.target)) + '</span>' +
          (c.category ? '  <span class="ds-click-tag">' + esc(c.category) + '</span>' : '') +
          '  <span class="ds-click-time">' + fmtTime(c.created_at) + '</span>' +
          '</div>';
      });
      logH += '</div>';
      logEl.innerHTML = logH;
    }
  }

  /* ── Render most clicked pages (all users) ──────────── */
  function renderMostClickedPages(data) {
    var section = document.getElementById('ds-topclicks-section');
    if (!section) return;
    clear(section);

    var pages = data || [];
    if (!pages.length) {
      showEmpty(section);
      return;
    }

    var maxClicks = pages[0].click_count || 1;
    pages.forEach(function (p, i) {
      var pct = Math.min(((p.click_count || 0) / maxClicks) * 100, 100);
      var row = el('div', 'ds-row');
      row.innerHTML =
        '<span class="ds-rank">' + (i + 1) + '</span>' +
        '<span class="ds-row-label">' + esc(p.path || 'Unknown') + '</span>' +
        '<span class="ds-row-value">' + p.click_count + ' clicks</span>' +
        '<div class="ds-bar-track"><div class="ds-bar-fill" style="width:' + pct.toFixed(1) + '%"></div></div>';
      section.appendChild(row);
    });
  }

  /* ── Render most studied pages ──────────────────────── */
  function renderPages(data) {
    var section = document.getElementById('ds-pages-section');
    if (!section) return;
    clear(section);

    var pages = data || [];
    if (!pages.length) {
      showEmpty(section);
      return;
    }

    pages.forEach(function (p, i) {
      var row = el('div', 'ds-row');
      row.innerHTML =
        '<span class="ds-rank">' + (i + 1) + '</span>' +
        '<span class="ds-row-label">' + esc(p.title || p.path || 'Unknown') + '</span>' +
        '<span class="ds-row-value">' + (p.unique_sessions || p.visit_count || 0) + ' sessions</span>';
      section.appendChild(row);
    });
  }

  /* ── Render session history (from localStorage) ────── */
  function renderSession() {
    var section = document.getElementById('ds-session-section');
    if (!section) return;
    clear(section);

    var session = lsGet('sl_v2_session', null);
    if (!session || !session.startTime) {
      showEmpty(section);
      return;
    }

    var start  = new Date(session.startTime);
    var totalMs = session.totalStudyMs || 0;
    var pages  = session.pages || [];

    var info = el('div', 'ds-session-info');
    info.innerHTML =
      '<div class="ds-session-line"><span class="ds-session-label">Started:</span> ' + esc(start.toLocaleString()) + '</div>' +
      '<div class="ds-session-line"><span class="ds-session-label">Study Time:</span> ' + fmtHours(totalMs) + 'h</div>' +
      '<div class="ds-session-line"><span class="ds-session-label">Pages Visited:</span> ' + pages.length + '</div>';

    section.appendChild(info);

    /* Show unique pages from this session (up to 5) */
    if (pages.length > 0) {
      var heading = el('div', 'ds-section-subtitle');
      heading.textContent = 'Pages in this session:';
      section.appendChild(heading);

      var seen   = {};
      var unique = [];
      pages.forEach(function (p) {
        if (!seen[p.path] && unique.length < 5) {
          seen[p.path] = true;
          unique.push(p);
        }
      });

      var list = el('ul', 'ds-session-pages');
      unique.forEach(function (p) {
        var li = el('li');
        li.textContent = (p.title || p.path || 'Unknown') + ' \u2014 ' + fmtMinutes(p.studyMs || 0) + 'm';
        list.appendChild(li);
      });
      section.appendChild(list);
    }
  }

  /* ── Main render ────────────────────────────────────── */
  function renderDashboard() {
    buildSkeleton();

    /* Show loading indicators in dynamic sections */
    showLoading(document.getElementById('ds-course-section'));
    showLoading(document.getElementById('ds-pages-section'));
    showLoading(document.getElementById('ds-session-section'));
    showLoading(document.getElementById('ds-myclicks-stats'));
    showLoading(document.getElementById('ds-topclicks-section'));

    /* Get session ID for per-user queries */
    var sessionId = (logger.sessionId) || null;

    /* Fire all RPCs in parallel */
    Promise.all([
      rpc('get_total_clicks').catch(function () { return null; }),
      rpc('get_total_study_ms').catch(function () { return null; }),
      rpc('get_study_streak').catch(function () { return null; }),
      rpc('get_study_ms_today').catch(function () { return null; }),
      rpc('get_study_ms_per_day', { days: 7 }).catch(function () { return []; }),
      rpc('get_course_breakdown').catch(function () { return []; }),
      rpc('get_most_studied_pages', { limit_count: 10 }).catch(function () { return []; }),
      /* Per-user click stats */
      sessionId ? rpc('get_my_click_stats', { p_session_id: sessionId }).catch(function () { return null; }) : Promise.resolve(null),
      sessionId ? rpc('get_my_top_pages', { p_session_id: sessionId, limit_count: 5 }).catch(function () { return []; }) : Promise.resolve([]),
      sessionId ? rpc('get_my_clicks', { p_session_id: sessionId }).catch(function () { return []; }) : Promise.resolve([]),
      /* All-user click ranking */
      rpc('get_most_clicked_pages', { limit_count: 10 }).catch(function () { return []; }),
    ]).then(function (results) {
      renderStats({
        totalClicks:  results[0],
        totalHours:   results[1] != null ? fmtHours(results[1]) : null,
        streak:       results[2],
        todayMinutes: results[3] != null ? fmtMinutes(results[3]) : null,
      });

      drawChart(results[4]);

      renderCourses(results[5]);
      renderPages(results[6]);
      renderSession();

      /* Click activity sections */
      renderMyClicks(results[7], results[8], results[9]);
      renderMostClickedPages(results[10]);
    });
  }

  /* ── Bubble helpers ──────────────────────────────────── */
  function truncPath(p) {
    if (!p) return '/';
    var s = p.replace(/^\/econ500\//, '');
    if (s.length > 35) s = s.slice(0, 32) + '...';
    return s || '/';
  }

  function shortId(id) {
    if (!id) return '\u2014';
    return id.length > 10 ? id.slice(0, 10) + '\u2026' : id;
  }

  function fmtTime(iso) {
    if (!iso) return '\u2014';
    try {
      var d = new Date(iso);
      return d.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch (e) { return String(iso); }
  }

  /* ── Render live data feed (per-table collapsible) ──── */
  function renderDebugLogger() {
    var target = document.getElementById('ds-debug-tables');
    var badge  = document.getElementById('ds-debug-badge');
    if (!target) return;

    target.innerHTML = '<div class="ds-loader">\u23F3 Loading\u2026</div>';

    if (typeof sbSelect !== 'function') {
      target.innerHTML = '<div class="ds-empty">sbSelect not available</div>';
      return;
    }

    var tables = [
      { name: 'page_visits',   label: 'Page Visits',   cols: ['id','path','title','created_at'] },
      { name: 'click_events',  label: 'Click Events',  cols: ['id','path','target','category','created_at'] },
      { name: 'study_sessions', label: 'Study Sessions', cols: ['id','session_id','date','total_study_ms','pages_studied','created_at'] },
    ];

    Promise.all(tables.map(function (t) {
      return sbSelect(t.name, {
        select: t.cols.join(','),
        order: 'created_at.desc',
        limit: 10,
      })
        .then(function (res) { return res.ok ? res.json() : []; })
        .catch(function () { return []; });
    })).then(function (results) {
      clear(target);

      var totalRecords = 0;

      results.forEach(function (rows, idx) {
        var table = tables[idx];
        var count = rows.length;
        totalRecords += count;

        /* ── Per-table collapsible block ── */
        var block = el('div', 'ds-dt');

        var toggle = el('button', 'ds-dt-toggle');
        toggle.setAttribute('aria-expanded', 'false');

        var statusDot = el('span', 'ds-dt-status');
        statusDot.setAttribute('data-status', count > 0 ? 'has-data' : 'empty');

        var labelSpan = el('span', 'ds-dt-label');
        labelSpan.textContent = table.label;

        var countSpan = el('span', 'ds-dt-count');
        countSpan.textContent = count + ' record' + (count !== 1 ? 's' : '');

        var arrow = el('span', 'ds-dt-arrow');
        arrow.textContent = '\u25B6';

        toggle.appendChild(statusDot);
        toggle.appendChild(labelSpan);
        toggle.appendChild(countSpan);
        toggle.appendChild(arrow);
        block.appendChild(toggle);

        /* ── Collapsible body ── */
        var body = el('div', 'ds-dt-body');
        var scrollWrap = el('div', 'ds-dt-scroll');

        if (!rows.length) {
          var empty = el('div', 'ds-empty');
          empty.textContent = 'No records yet';
          scrollWrap.appendChild(empty);
        } else {
          var bubbleContainer = el('div', 'ds-dt-bubbles');

          rows.forEach(function (row) {
            var bubble = el('div', 'ds-dt-bubble');

            /* Build bubble content per table type */
            var content = '';
            if (table.name === 'page_visits') {
              content += '<span class="ds-bubble-field ds-bubble-path" title="' + esc(row.path || '') + '">' + esc(truncPath(row.path)) + '</span>';
              if (row.title) content += '<span class="ds-bubble-sep">|</span><span class="ds-bubble-field ds-bubble-title">' + esc(row.title) + '</span>';
              content += '<span class="ds-bubble-sep">|</span><span class="ds-bubble-field ds-bubble-time">' + fmtTime(row.created_at) + '</span>';
            } else if (table.name === 'click_events') {
              content += '<span class="ds-bubble-field ds-bubble-path" title="' + esc(row.path || '') + '">' + esc(truncPath(row.path)) + '</span>';
              content += '<span class="ds-bubble-arrow">\u2192</span>';
              content += '<span class="ds-bubble-field ds-bubble-target" title="' + esc(row.target || '') + '">' + esc(truncPath(row.target)) + '</span>';
              if (row.category) content += '<span class="ds-bubble-tag">' + esc(row.category) + '</span>';
              content += '<span class="ds-bubble-sep">|</span><span class="ds-bubble-field ds-bubble-time">' + fmtTime(row.created_at) + '</span>';
            } else if (table.name === 'study_sessions') {
              content += '<span class="ds-bubble-field ds-bubble-id">\u{1F4CB} ' + esc(shortId(row.session_id)) + '</span>';
              content += '<span class="ds-bubble-sep">|</span><span class="ds-bubble-field">' + esc(row.date || '') + '</span>';
              content += '<span class="ds-bubble-sep">|</span><span class="ds-bubble-field ds-bubble-ms">' + fmtMinutes(row.total_study_ms || 0) + ' min</span>';
              content += '<span class="ds-bubble-tag">' + (row.pages_studied || 0) + ' pages</span>';
            }

            bubble.innerHTML = content;
            bubbleContainer.appendChild(bubble);
          });

          scrollWrap.appendChild(bubbleContainer);
        }

        body.appendChild(scrollWrap);
        block.appendChild(body);
        target.appendChild(block);

        /* ── Toggle handler ── */
        toggle.addEventListener('click', function () {
          var expanded = toggle.getAttribute('aria-expanded') === 'true';
          toggle.setAttribute('aria-expanded', String(!expanded));
          body.classList.toggle('ds-dt-open');
          arrow.textContent = expanded ? '\u25B6' : '\u25BC';
        });
      });

      /* Update header badge */
      if (badge) badge.textContent = totalRecords + ' total records';
    });
  }

  /* ── Boot ────────────────────────────────────────────── */
  function boot() {
    renderDashboard();

    /* Render debug logger after main dashboard */
    renderDebugLogger();

    /* Responsive chart: redraw on resize */
    var canvas = document.getElementById('ds-chart-canvas');
    if (canvas) {
      if (window.ResizeObserver) {
        var ro = new ResizeObserver(function () { redrawChart(); });
        ro.observe(canvas.parentElement);
      } else {
        var timer;
        window.addEventListener('resize', function () {
          clearTimeout(timer);
          timer = setTimeout(redrawChart, 200);
        });
      }
    }
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    boot();
  } else {
    document.addEventListener('DOMContentLoaded', boot);
  }
})();
