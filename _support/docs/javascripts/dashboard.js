/**
 * Study Dashboard v3 — Full-page analytics dashboard
 * Renders into <div id="study-dashboard"> element on the MkDocs study-dashboard page.
 *
 * Dependencies:
 *   - window.__studyLogger (from docs/javascripts/visitor-logger.js)
 *     provides sbRpc(fn, params), sbSelect(table, opts), lsGet(key, def),
 *     sessionId, visitorId
 *   - Canvas 2D API (no external libraries)
 *
 * Class naming convention (CSS handled separately):
 *   ds-container, ds-header-bar, ds-grid, ds-card, ds-section,
 *   ds-row, ds-bar-track, ds-bar-fill, ds-chart-container, etc.
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

  /* ── STATE ──────────────────────────────────────────── */
  var STATE = {
    days: 30,
    sessionId: (logger.sessionId) || null,
    visitorId: (logger.visitorId) || null,
  };

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
    if (str == null) return '';
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(String(str)));
    return d.innerHTML;
  }

  function showEmpty(parent) {
    parent.innerHTML = '<div class="ds-empty">\uD83D\uDCD6 No data yet. Start studying to see your stats!</div>';
  }

  function showLoading(parent) {
    if (parent) parent.innerHTML = '<div class="ds-loader">\u23F3 Loading\u2026</div>';
  }

  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
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

  /* ── Build dashboard skeleton ───────────────────────── */
  function buildSkeleton() {
    var html =
      '<div class="ds-container">' +

        /* Global error banner (hidden by default) */
        '<div id="ds-error-banner" class="ds-error-banner" style="display:none">' +
          '\u26A0\uFE0F Could not load dashboard data. ' +
          'Please check your connection and try again.' +
        '</div>' +

        /* ════ 1. Header Bar + Range Selector ════ */
        '<div class="ds-header-bar">' +
          '<div class="ds-header-text">' +
            '<h2>Study Analytics</h2>' +
            '<p>Your study activity across all economics courses</p>' +
          '</div>' +
          '<div class="ds-range-selector">' +
            '<button class="ds-range-btn" data-days="7">7d</button>' +
            '<button class="ds-range-btn ds-range-btn--active" data-days="30">30d</button>' +
            '<button class="ds-range-btn" data-days="90">90d</button>' +
          '</div>' +
        '</div>' +

        /* ════ 2. Overview Stats Grid ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Overview</h2>' +
          '<div id="ds-overview-grid" class="ds-grid">' +
            '<div class="ds-card">' +
              '<div class="ds-card-value" id="ds-val-clicks">\u2014</div>' +
              '<div class="ds-card-label">Total Clicks</div>' +
            '</div>' +
            '<div class="ds-card">' +
              '<div class="ds-card-value" id="ds-val-hours">\u2014</div>' +
              '<div class="ds-card-label">Study Hours</div>' +
            '</div>' +
            '<div class="ds-card">' +
              '<div class="ds-card-value" id="ds-val-streak">\u2014</div>' +
              '<div class="ds-card-label">Day Streak</div>' +
            '</div>' +
            '<div class="ds-card">' +
              '<div class="ds-card-value" id="ds-val-today">\u2014</div>' +
              '<div class="ds-card-label">Today\u2019s Minutes</div>' +
            '</div>' +
            '<div class="ds-card">' +
              '<div class="ds-card-value" id="ds-val-active">\u2014</div>' +
              '<div class="ds-card-label">Active Visitors</div>' +
            '</div>' +
          '</div>' +
        '</div>' +

        /* ════ 3. Study Pulse (7-day bar chart) ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Study Pulse (7-Day)</h2>' +
          '<div class="ds-chart-container">' +
            '<canvas id="ds-chart-canvas" height="200"></canvas>' +
          '</div>' +
        '</div>' +

        /* ════ 4. Course Breakdown + Topic Drill-down ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Course Breakdown</h2>' +
          '<div id="ds-course-section"></div>' +
          '<p class="ds-hint">Click a course to drill into topics.</p>' +
        '</div>' +

        /* ════ 5. Insights Panel ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Insights</h2>' +
          '<div id="ds-insights-section"></div>' +
        '</div>' +

        /* ════ 6. Content Type Breakdown ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Content Type Performance</h2>' +
          '<div id="ds-content-types-section"></div>' +
        '</div>' +

        /* ════ 7. Most Studied Pages (v2) ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Most Studied Pages</h2>' +
          '<div id="ds-pages-section"></div>' +
        '</div>' +

        /* ════ 8. Most Clicked Pages (v3) ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Most Clicked Pages</h2>' +
          '<div id="ds-topclicks-section"></div>' +
        '</div>' +

        /* ════ 9. Top Search Queries ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Top Search Queries</h2>' +
          '<div id="ds-search-section"></div>' +
        '</div>' +

        /* ════ 10. Hourly Study Pattern ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Hourly Study Pattern</h2>' +
          '<div id="ds-hourly-section"></div>' +
        '</div>' +

        /* ════ 11. My Click Activity (per-session) ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">My Click Activity</h2>' +
          '<div id="ds-myclicks-stats" class="ds-clicks-stats"></div>' +
          '<div id="ds-myclicks-pages"></div>' +
          '<div id="ds-myclicks-log"></div>' +
        '</div>' +

        /* ════ 12. Recent Session (from localStorage) ════ */
        '<div class="ds-section">' +
          '<h2 class="ds-section-title">Recent Session</h2>' +
          '<div id="ds-session-section"></div>' +
        '</div>' +

        /* ════ 13. Live Data Feed (hidden unless dev mode is enabled via localStorage) ════ */
        '<div class="ds-section ds-debug" id="ds-debug-section" style="display:none">' +
          '<div class="ds-debug-header">' +
            '<span class="ds-debug-header-label">\uD83D\uDCCA Live Data Feed</span>' +
            '<span class="ds-debug-header-badge" id="ds-debug-badge"></span>' +
          '</div>' +
          '<p class="ds-debug-hint">Live records pulled from the database. ' +
          'Expand a table to inspect raw rows. ' +
          '(Enable via localStorage: <code>sl_dev_mode=true</code>)</p>' +
          '<div id="ds-debug-tables"></div>' +
        '</div>' +

      '</div>';

    container.innerHTML = html;
  }

  /* ════════════════════════════════════════════════════════
   *  RENDER FUNCTIONS
   * ════════════════════════════════════════════════════════ */

  /* ── 2. Overview stats grid ─────────────────────────── */
  function renderOverview(summary, totalClicks, streak, todayMs, activeVisitors) {
    /* summary: from get_dashboard_summary → [{metric_name, metric_value}] */
    var totalStudyMs = 0;
    if (summary && summary.length) {
      for (var i = 0; i < summary.length; i++) {
        if (summary[i].metric_name === 'total_study_ms') {
          totalStudyMs = summary[i].metric_value || 0;
        }
      }
    }

    var activeCount = null;
    if (activeVisitors && activeVisitors.length > 0) {
      var ac = activeVisitors[0].active_visitors;
      activeCount = (ac != null && ac > 0) ? ac : null;
    }

    setText('ds-val-clicks', totalClicks != null ? String(totalClicks) : '\u2014');
    setText('ds-val-hours', totalStudyMs > 0 ? fmtHours(totalStudyMs) + 'h' : '\u2014');
    setText('ds-val-streak', streak != null ? String(streak) : '\u2014');
    setText('ds-val-today', todayMs != null ? fmtMinutes(todayMs) : '\u2014');
    setText('ds-val-active', activeCount != null ? String(activeCount) : '\u2014');
  }

  /* ── 3. Draw 7-day bar chart (Canvas 2D) ────────────── */
  var chartDataCache = null;

  function drawChart(data) {
    var canvas = document.getElementById('ds-chart-canvas');
    if (!canvas) return;

    chartDataCache = data;

    var chartData = (data || []).map(function (d) {
      return {
        day:     dayName(d.date),
        minutes: Math.round((d.total_ms || 0) / 60000),
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
    var canvas = document.getElementById('ds-chart-canvas');
    if (!canvas) return;
    drawChart(chartDataCache);
  }

  /* ── 4. Course breakdown + topic drill-down ─────────── */
  function renderCourses(courses) {
    var section = document.getElementById('ds-course-section');
    if (!section) return;
    clear(section);

    var data = courses || [];
    if (!data.length) {
      showEmpty(section);
      return;
    }

    /* Sort by total_study_ms descending */
    data.sort(function (a, b) {
      return (b.total_study_ms || 0) - (a.total_study_ms || 0);
    });

    var maxStudy = Math.max.apply(null, data.map(function (c) { return c.total_study_ms || 0; })) || 1;

    data.forEach(function (c) {
      var courseName = c.course || 'Unknown';
      var studyMs = c.total_study_ms || 0;
      var sessions = c.session_count || 0;
      var pct = Math.min((studyMs / maxStudy) * 100, 100);

      var row = el('div', 'ds-topic-course');
      row.setAttribute('data-course', courseName);

      row.innerHTML =
        '<span class="ds-topic-course-icon">\u25B6</span>' +
        '<span class="ds-topic-course-name">' + esc(courseName) + '</span>' +
        '<span class="ds-topic-course-hours">' + fmtHours(studyMs) + 'h</span>' +
        '<span class="ds-row-value">' + sessions + ' session' + (sessions !== 1 ? 's' : '') + '</span>' +
        '<div class="ds-bar-track"><div class="ds-bar-fill" style="width:' + pct.toFixed(1) + '%"></div></div>';

      section.appendChild(row);

      /* Hidden topic list container for this course (CSS handles collapsed state via max-height: 0) */
      var topicList = el('div', 'ds-topic-list');
      topicList.setAttribute('data-course', courseName);
      section.appendChild(topicList);
    });
  }

  /* Topic cache to avoid re-fetching */
  var topicCache = {};

  function expandCourse(courseEl, courseName) {
    var icon = courseEl.querySelector('.ds-topic-course-icon');
    var topicList = courseEl.nextElementSibling;

    if (!topicList || !topicList.classList.contains('ds-topic-list')) return;

    /* Toggle expand/collapse */
    var isExpanded = topicList.classList.contains('ds-topic-list--open');

    if (isExpanded) {
      topicList.classList.remove('ds-topic-list--open');
      courseEl.classList.remove('ds-topic-course--expanded');
      return;
    }

    /* Expand */
    topicList.classList.add('ds-topic-list--open');
    courseEl.classList.add('ds-topic-course--expanded');

    /* Fetch topics if not cached */
    if (topicCache[courseName]) {
      renderTopicItems(topicList, topicCache[courseName]);
      return;
    }

    topicList.innerHTML = '<div class="ds-loader">\u23F3 Loading\u2026</div>';

    rpc('get_study_ms_by_topic', { p_course: courseName, days: STATE.days })
      .then(function (data) {
        var topics = data || [];
        topicCache[courseName] = topics;
        renderTopicItems(topicList, topics);
      })
      .catch(function () {
        topicList.innerHTML = '<div class="ds-empty">Could not load topics.</div>';
      });
  }

  function renderTopicItems(topicList, topics) {
    clear(topicList);

    if (!topics.length) {
      topicList.innerHTML = '<div class="ds-empty">No topic data for this course.</div>';
      return;
    }

    var maxStudy = Math.max.apply(null, topics.map(function (t) { return t.total_study_ms || 0; })) || 1;

    topics.forEach(function (t) {
      var topicName = t.topic || 'Unknown';
      var studyMs = t.total_study_ms || 0;
      var sessions = t.session_count || 0;
      var pct = Math.min((studyMs / maxStudy) * 100, 100);

      var item = el('div', 'ds-topic-item');
      item.setAttribute('data-topic', topicName);
      item.innerHTML =
        '<span class="ds-topic-name">' + esc(topicName) + '</span>' +
        '<span class="ds-topic-value">' + fmtHours(studyMs) + 'h</span>' +
        '<span class="ds-row-value">' + sessions + '</span>' +
        '<div class="ds-bar-track"><div class="ds-bar-fill ds-topic-bar" style="width:' + pct.toFixed(1) + '%"></div></div>';

      topicList.appendChild(item);
    });
  }

  function handleTopicDrillDown(e) {
    /* Course click */
    var courseEl = e.target.closest('.ds-topic-course');
    if (courseEl) {
      var courseName = courseEl.getAttribute('data-course');
      if (courseName) expandCourse(courseEl, courseName);
      return;
    }

    /* Topic item click — toggle active */
    var topicItem = e.target.closest('.ds-topic-item');
    if (topicItem) {
      topicItem.classList.toggle('ds-topic-item--active');
    }
  }

  /* ── 5. Insights panel ──────────────────────────────── */
  var insightLabels = {
    most_studied_course: 'Most Studied Course',
    neglected_course: 'Needs Attention',
    study_time_total_hours: 'Total Study Time',
    week_trend_pct: 'Weekly Trend',
  };

  var insightIcons = {
    most_studied_course: '\uD83C\uDF1F',
    neglected_course: '\u26A0\uFE0F',
    study_time_total_hours: '\u23F1\uFE0F',
    week_trend_pct: '\uD83D\uDCC8',
  };

  function getInsightValue(insight) {
    var key = insight.insight_key;
    var val = insight.insight_value;

    if (key === 'study_time_total_hours') {
      var num = parseFloat(val);
      if (!isNaN(num)) return num.toFixed(1) + 'h';
    }
    if (key === 'week_trend_pct') {
      var num = parseFloat(val);
      if (!isNaN(num)) return (num > 0 ? '+' : '') + num.toFixed(1) + '%';
    }
    return val || '\u2014';
  }

  function renderInsights(insights) {
    var section = document.getElementById('ds-insights-section');
    if (!section) return;
    clear(section);

    var data = insights || [];
    if (!data.length) {
      showEmpty(section);
      return;
    }

    var grid = el('div', 'ds-insights-grid');

    data.forEach(function (insight) {
      var type = insight.insight_type || 'info';
      var key = insight.insight_key || '';
      var label = insightLabels[key] || key.replace(/_/g, ' ');
      var value = getInsightValue(insight);
      var icon = insightIcons[key] || '\u2139\uFE0F';

      var typeClass = 'ds-insight--info';
      if (type === 'positive') typeClass = 'ds-insight--positive';
      else if (type === 'warning') typeClass = 'ds-insight--warning';

      var card = el('div', 'ds-insight-card ' + typeClass);
      card.innerHTML =
        '<span class="ds-insight-icon">' + icon + '</span>' +
        '<span class="ds-insight-text">' + esc(value) + '</span>' +
        '<span class="ds-insight-label">' + esc(label) + '</span>';

      grid.appendChild(card);
    });

    section.appendChild(grid);
  }

  /* ── 6. Content type breakdown ──────────────────────── */
  function renderContentTypes(data) {
    var section = document.getElementById('ds-content-types-section');
    if (!section) return;
    clear(section);

    var types = data || [];
    if (!types.length) {
      showEmpty(section);
      return;
    }

    /* Sort by visits descending */
    types.sort(function (a, b) {
      return (b.visits || 0) - (a.visits || 0);
    });

    var maxVisits = types[0].visits || 1;

    types.forEach(function (t) {
      var pct = Math.min(((t.visits || 0) / maxVisits) * 100, 100);
      var row = el('div', 'ds-row');
      row.innerHTML =
        '<span class="ds-row-label">' + esc(t.content_type || 'Unknown') + '</span>' +
        '<span class="ds-row-value">' + (t.visits || 0) + ' visits</span>' +
        '<div class="ds-bar-track"><div class="ds-bar-fill" style="width:' + pct.toFixed(1) + '%"></div></div>';
      section.appendChild(row);
    });
  }

  /* ── 7. Most studied pages (v2) ─────────────────────── */
  function renderMostStudiedPages(data) {
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
        '<span class="ds-row-value">' + (p.sessions_count || 0) + ' sessions</span>';
      section.appendChild(row);
    });
  }

  /* ── 8. Most clicked pages (v3) ─────────────────────── */
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
      var topicTag = p.topic ? '<span class="ds-click-tag">' + esc(p.topic) + '</span>' : '';
      row.innerHTML =
        '<span class="ds-rank">' + (i + 1) + '</span>' +
        '<span class="ds-row-label">' + esc(truncPath(p.path)) + '</span>' +
        topicTag +
        '<span class="ds-row-value">' + (p.click_count || 0) + ' clicks</span>' +
        '<div class="ds-bar-track"><div class="ds-bar-fill" style="width:' + pct.toFixed(1) + '%"></div></div>';
      section.appendChild(row);
    });
  }

  /* ── 9. Top search queries ──────────────────────────── */
  function renderTopSearchQueries(data) {
    var section = document.getElementById('ds-search-section');
    if (!section) return;
    clear(section);

    var queries = data || [];
    if (!queries.length) {
      showEmpty(section);
      return;
    }

    queries.forEach(function (q, i) {
      var row = el('div', 'ds-row');
      row.innerHTML =
        '<span class="ds-rank">' + (i + 1) + '</span>' +
        '<span class="ds-row-label">' + esc(q.query || 'Unknown') + '</span>' +
        '<span class="ds-row-value">' + (q.search_count || 0) + '</span>';
      section.appendChild(row);
    });
  }

  /* ── 10. Hourly study pattern ───────────────────────── */
  function renderHourlyPattern(data) {
    var section = document.getElementById('ds-hourly-section');
    if (!section) return;
    clear(section);

    var hours = data || [];
    if (!hours.length) {
      showEmpty(section);
      return;
    }

    /* Build lookup: hour → avg_study_ms */
    var lookup = {};
    var maxAvg = 0;
    for (var i = 0; i < hours.length; i++) {
      var h = hours[i];
      var hour = h.hour_of_day;
      if (hour >= 0 && hour <= 23) {
        var avg = h.avg_study_ms || 0;
        lookup[hour] = avg;
        if (avg > maxAvg) maxAvg = avg;
      }
    }

    /* Calculate level for each hour (0-5) */
    function getLevel(avg) {
      if (maxAvg === 0) return 0;
      var ratio = avg / maxAvg;
      if (ratio === 0) return 0;
      if (ratio <= 0.2) return 1;
      if (ratio <= 0.4) return 2;
      if (ratio <= 0.6) return 3;
      if (ratio <= 0.8) return 4;
      return 5;
    }

    var grid = el('div', 'ds-hourly-grid');

    for (var hour = 0; hour < 24; hour++) {
      var avg = lookup[hour] || 0;
      var level = getLevel(avg);
      var cell = el('div', 'ds-hourly-cell');
      cell.setAttribute('data-level', String(level));
      cell.textContent = hour;
      grid.appendChild(cell);
    }

    section.appendChild(grid);

    /* Label grid below — one label per hour, matching the 24-cell CSS grid */
    var labelGrid = el('div', 'ds-hourly-labels');
    for (var h = 0; h < 24; h++) {
      var lbl = el('div', 'ds-hourly-label');
      lbl.textContent = h;
      labelGrid.appendChild(lbl);
    }
    section.appendChild(labelGrid);

    var caption = el('div', 'ds-hourly-caption');
    caption.textContent = 'Hour of Day (0\u201323) \u2014 darker = more study time';
    section.appendChild(caption);
  }

  /* ── 11. My click activity ──────────────────────────── */
  function renderMyClicks(stats, topPages, recentClicks) {
    var statsEl = document.getElementById('ds-myclicks-stats');
    var pagesEl = document.getElementById('ds-myclicks-pages');
    var logEl   = document.getElementById('ds-myclicks-log');

    /* Stats row */
    var totalClicks = (stats && stats.total_clicks) || 0;
    var uniquePages = (stats && stats.unique_pages_clicked) || 0;

    if (statsEl) {
      statsEl.innerHTML =
        '<div class="ds-clicks-stat">' +
          '<span class="ds-clicks-stat-value">' + totalClicks + '</span>' +
          '<span class="ds-clicks-stat-label">your total clicks</span>' +
        '</div>' +
        '<div class="ds-clicks-stat">' +
          '<span class="ds-clicks-stat-value">' + uniquePages + '</span>' +
          '<span class="ds-clicks-stat-label">unique pages clicked</span>' +
        '</div>';
    }

    /* Top pages for this user */
    if (pagesEl) {
      clear(pagesEl);
      var pages = topPages || [];
      if (pages.length > 0) {
        var maxClicks = pages[0].click_count || 1;
        var h = '<div class="ds-section-subtitle">Your most-clicked pages</div>';
        pages.forEach(function (p) {
          var pct = Math.min(((p.click_count || 0) / maxClicks) * 100, 100);
          h +=
            '<div class="ds-row">' +
            '  <span class="ds-row-label">' + esc(truncPath(p.path)) + '</span>' +
            '  <span class="ds-row-value">' + p.click_count + ' clicks</span>' +
            '  <div class="ds-bar-track"><div class="ds-bar-fill" style="width:' + pct.toFixed(1) + '%"></div></div>' +
            '</div>';
        });
        pagesEl.innerHTML = h;
      }
    }

    /* Recent click log */
    if (logEl) {
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
  }

  /* ── 12. Session from localStorage ──────────────────── */
  function renderSession() {
    var section = document.getElementById('ds-session-section');
    if (!section) return;
    clear(section);

    var session = lsGet('sl_v3_session', null);
    if (!session || !session.startTime) {
      showEmpty(section);
      return;
    }

    var start, totalMs, pages;
    try {
      start   = new Date(session.startTime);
      totalMs = session.totalStudyMs || 0;
      pages   = session.pages || [];
      if (isNaN(start.getTime())) throw new Error('Invalid date');
    } catch (e) {
      showEmpty(section);
      return;
    }

    var info = el('div');
    info.innerHTML =
      '<div class="ds-row"><span class="ds-row-label">Started:</span><span class="ds-row-value">' + esc(start.toLocaleString()) + '</span></div>' +
      '<div class="ds-row"><span class="ds-row-label">Study Time:</span><span class="ds-row-value">' + fmtHours(totalMs) + 'h</span></div>' +
      '<div class="ds-row"><span class="ds-row-label">Pages Visited:</span><span class="ds-row-value">' + pages.length + '</span></div>';
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

      unique.forEach(function (p) {
        var row = el('div', 'ds-row');
        row.innerHTML =
          '<span class="ds-row-label">' + esc(p.title || p.path || 'Unknown') + '</span>' +
          '<span class="ds-row-value">' + fmtMinutes(p.studyMs || 0) + 'm</span>';
        section.appendChild(row);
      });
    }
  }

  /* ════════════════════════════════════════════════════════
   *  MAIN FETCH + RENDER
   * ════════════════════════════════════════════════════════ */

  function loadAll() {
    /* Show loading in dynamic sections */
    showLoading(document.getElementById('ds-course-section'));
    showLoading(document.getElementById('ds-insights-section'));
    showLoading(document.getElementById('ds-content-types-section'));
    showLoading(document.getElementById('ds-pages-section'));
    showLoading(document.getElementById('ds-topclicks-section'));
    showLoading(document.getElementById('ds-search-section'));
    showLoading(document.getElementById('ds-hourly-section'));
    showLoading(document.getElementById('ds-myclicks-stats'));
    showLoading(document.getElementById('ds-session-section'));

    /* Clear topic cache on range change */
    topicCache = {};

    /* ── Fire all RPCs in parallel ── */
    var sid = STATE.sessionId;

    var pAll = Promise.all([

      /* v3 RPCs */
      rpc('get_dashboard_summary', { days: STATE.days }).catch(function () { return []; }),
      rpc('get_study_ms_per_day', { days: 7 }).catch(function () { return []; }),
      rpc('get_study_ms_by_course', { days: STATE.days }).catch(function () { return []; }),
      rpc('get_study_insights', { days: STATE.days }).catch(function () { return []; }),
      rpc('get_content_type_performance', { days: STATE.days }).catch(function () { return []; }),
      rpc('get_most_clicked_pages', { limit_count: 10, days: STATE.days }).catch(function () { return []; }),
      rpc('get_top_search_queries', { limit_count: 10, days: STATE.days }).catch(function () { return []; }),
      rpc('get_study_hourly_pattern', { days: STATE.days }).catch(function () { return []; }),
      rpc('get_active_visitors_now', { minutes_window: 5 }).catch(function () { return []; }),

      /* Legacy v2 RPCs */
      rpc('get_total_clicks').catch(function () { return null; }),
      rpc('get_study_streak').catch(function () { return null; }),
      rpc('get_study_ms_today').catch(function () { return null; }),
      rpc('get_most_studied_pages', { limit_count: 10 }).catch(function () { return []; }),

      /* Per-session click stats */
      sid ? rpc('get_my_click_stats', { p_session_id: sid }).catch(function () { return null; }) : Promise.resolve(null),
      sid ? rpc('get_my_top_pages', { p_session_id: sid, limit_count: 5 }).catch(function () { return []; }) : Promise.resolve([]),
      sid ? rpc('get_my_clicks', { p_session_id: sid }).catch(function () { return []; }) : Promise.resolve([]),
    ]);

    pAll.then(function (results) {
      /* results index:
          0  get_dashboard_summary
          1  get_study_ms_per_day
          2  get_study_ms_by_course
          3  get_study_insights
          4  get_content_type_performance
          5  get_most_clicked_pages
          6  get_top_search_queries
          7  get_study_hourly_pattern
          8  get_active_visitors_now
          9  get_total_clicks
          10 get_study_streak
          11 get_study_ms_today
          12 get_most_studied_pages
          13 get_my_click_stats
          14 get_my_top_pages
          15 get_my_clicks
      */

      /* 2. Overview */
      renderOverview(results[0], results[9], results[10], results[11], results[8]);

      /* 3. Chart */
      drawChart(results[1]);

      /* 4. Courses */
      renderCourses(results[2]);

      /* 5. Insights */
      renderInsights(results[3]);

      /* 6. Content types */
      renderContentTypes(results[4]);

      /* 7. Most studied pages */
      renderMostStudiedPages(results[12]);

      /* 8. Most clicked pages */
      renderMostClickedPages(results[5]);

      /* 9. Top search queries */
      renderTopSearchQueries(results[6]);

      /* 10. Hourly pattern */
      renderHourlyPattern(results[7]);

      /* 11. My click activity */
      renderMyClicks(results[13], results[14], results[15]);

      /* 12. Session */
      renderSession();

    }).catch(function (err) {
      /* Global catch — never break the page */
      console.warn('Dashboard: error loading data', err);
      var banner = document.getElementById('ds-error-banner');
      if (banner) banner.style.display = '';
    });
  }

  /* ════════════════════════════════════════════════════════
   *  LIVE DATA FEED (per-table collapsible) — copied from v2
   * ════════════════════════════════════════════════════════ */

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
              content += '<span class="ds-bubble-field ds-bubble-id">\uD83D\uDCCB ' + esc(shortId(row.session_id)) + '</span>';
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

  /* ════════════════════════════════════════════════════════
   *  RANGE SELECTOR HANDLER
   * ════════════════════════════════════════════════════════ */

  function initRangeSelector() {
    var selector = document.querySelector('.ds-range-selector');
    if (!selector) return;

    selector.addEventListener('click', function (e) {
      var btn = e.target.closest('.ds-range-btn');
      if (!btn) return;

      var days = parseInt(btn.getAttribute('data-days'), 10);
      if (isNaN(days) || days === STATE.days) return;

      /* Update active button */
      var allBtns = selector.querySelectorAll('.ds-range-btn');
      for (var i = 0; i < allBtns.length; i++) {
        allBtns[i].classList.remove('ds-range-btn--active');
      }
      btn.classList.add('ds-range-btn--active');

      /* Update state and re-fetch */
      STATE.days = days;
      loadAll();
    });
  }

  /* ════════════════════════════════════════════════════════
   *  BOOT
   * ════════════════════════════════════════════════════════ */

  function boot() {
    /* Build skeleton once */
    buildSkeleton();

    /* Set up range selector */
    initRangeSelector();

    /* Set up topic drill-down via event delegation */
    var courseSection = document.getElementById('ds-course-section');
    if (courseSection) {
      courseSection.addEventListener('click', handleTopicDrillDown);
    }

    /* Load and render all data */
    loadAll();

    /* Render debug logger after main dashboard (only if dev mode enabled) */
    var debugSection = document.getElementById('ds-debug-section');
    if (debugSection && lsGet('sl_dev_mode', false)) {
      debugSection.style.display = '';
      renderDebugLogger();
    }

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
