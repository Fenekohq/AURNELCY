const VISITOR_COUNT_KEY = 'aurnelcyVisitorCount';
const VISITOR_TIMESTAMPS_KEY = 'aurnelcyVisitorTimestamps';
const VISITOR_SESSION_KEY = 'aurnelcySessionCounted';

function getVisitorTimestamps() {
  const stored = localStorage.getItem(VISITOR_TIMESTAMPS_KEY);
  try {
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}

function saveVisitorTimestamps(timestamps) {
  localStorage.setItem(VISITOR_TIMESTAMPS_KEY, JSON.stringify(timestamps));
  localStorage.setItem(VISITOR_COUNT_KEY, String(timestamps.length));
}

function addVisitorIfNeeded() {
  if (sessionStorage.getItem(VISITOR_SESSION_KEY)) {
    return false;
  }
  const timestamps = getVisitorTimestamps();
  timestamps.push(Date.now());
  saveVisitorTimestamps(timestamps);
  sessionStorage.setItem(VISITOR_SESSION_KEY, 'true');
  return true;
}

function updateVisitorCounter() {
  const counterEl = document.getElementById('visitor-counter');
  if (addVisitorIfNeeded()) {
    localStorage.setItem(VISITOR_COUNT_KEY, String(getVisitorTimestamps().length));
  }
  if (counterEl) {
    counterEl.textContent = `Visites : ${getVisitorTimestamps().length}`;
  }
}

const VISITOR_PERIOD_LABELS = {
  day: 'Quotidien',
  week: 'Hebdomadaire',
  month: 'Mensuel',
  year: 'Annuel',
  all: 'All-time'
};

let activeVisitorPeriod = 'day';

function formatShortDate(date, options) {
  return new Intl.DateTimeFormat('fr-FR', options).format(date);
}

function getVisitorChartData(period) {
  const timestamps = getVisitorTimestamps();
  const now = Date.now();
  const msPerHour = 60 * 60 * 1000;
  const msPerDay = 24 * msPerHour;
  const values = [];
  const labels = [];
  let total = 0;
  let title = VISITOR_PERIOD_LABELS[period];
  let subtitle = '';

  if (period === 'day') {
    const buckets = Array.from({ length: 24 }, () => 0);
    timestamps.forEach(ts => {
      const diff = now - ts;
      if (diff >= 0 && diff < 24 * msPerHour) {
        const hour = new Date(ts).getHours();
        buckets[hour] += 1;
      }
    });
    buckets.forEach((value, index) => {
      labels.push(`${index}h`);
      values.push(value);
      total += value;
    });
    subtitle = 'Dernières 24 heures';
  } else if (period === 'week') {
    const buckets = Array.from({ length: 7 }, () => 0);
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - 6);
    timestamps.forEach(ts => {
      if (ts >= start.getTime() && ts <= now) {
        const date = new Date(ts);
        const index = Math.floor((date.setHours(0, 0, 0, 0) - start.getTime()) / msPerDay);
        if (index >= 0 && index < 7) {
          buckets[index] += 1;
        }
      }
    });
    for (let i = 0; i < 7; i += 1) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      labels.push(formatShortDate(date, { weekday: 'short' }));
      values.push(buckets[i]);
      total += buckets[i];
    }
    subtitle = 'Derniers 7 jours';
  } else if (period === 'month') {
    const bucketSize = 3 * msPerDay;
    const bucketCount = 10;
    const start = now - 29 * msPerDay;
    const buckets = Array.from({ length: bucketCount }, () => 0);
    timestamps.forEach(ts => {
      if (ts >= start && ts <= now) {
        const index = Math.floor((ts - start) / bucketSize);
        if (index >= 0 && index < bucketCount) {
          buckets[index] += 1;
        }
      }
    });
    for (let i = 0; i < bucketCount; i += 1) {
      const date = new Date(start + i * bucketSize);
      labels.push(`${date.getDate()}/${date.getMonth() + 1}`);
      values.push(buckets[i]);
      total += buckets[i];
    }
    subtitle = 'Derniers 30 jours';
  } else if (period === 'year') {
    const buckets = Array.from({ length: 12 }, () => 0);
    const start = new Date(now);
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
    start.setMonth(start.getMonth() - 11);
    timestamps.forEach(ts => {
      if (ts >= start.getTime() && ts <= now) {
        const date = new Date(ts);
        const monthIndex = (date.getFullYear() - start.getFullYear()) * 12 + date.getMonth() - start.getMonth();
        if (monthIndex >= 0 && monthIndex < 12) {
          buckets[monthIndex] += 1;
        }
      }
    });
    for (let i = 0; i < 12; i += 1) {
      const date = new Date(start);
      date.setMonth(start.getMonth() + i);
      labels.push(formatShortDate(date, { month: 'short' }));
      values.push(buckets[i]);
      total += buckets[i];
    }
    subtitle = 'Derniers 12 mois';
  } else {
    const years = timestamps
      .map(ts => new Date(ts).getFullYear())
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a, b) => a - b);
    const buckets = years.map(() => 0);
    timestamps.forEach(ts => {
      const year = new Date(ts).getFullYear();
      const index = years.indexOf(year);
      if (index >= 0) {
        buckets[index] += 1;
      }
    });
    years.forEach((year, index) => {
      labels.push(String(year));
      values.push(buckets[index]);
      total += buckets[index];
    });
    subtitle = 'Depuis le premier visiteur';
  }

  return {
    title,
    subtitle,
    labels,
    values,
    total,
    allTime: timestamps.length
  };
}

function setActiveVisitorPeriod(period) {
  activeVisitorPeriod = period;
  const buttons = document.querySelectorAll('.visitor-period-button');
  buttons.forEach(button => {
    const isActive = button.dataset.period === period;
    button.style.background = isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent';
    button.style.fontWeight = isActive ? '700' : '500';
  });
  buildVisitorChart(period);
}

function buildVisitorChart(period = activeVisitorPeriod) {
  const chartData = getVisitorChartData(period);
  const titleEl = document.getElementById('visitor-chart-title');
  const summaryEl = document.getElementById('visitor-chart-summary');
  const footerCount = document.getElementById('visitor-all-time-count');
  const graphEl = document.getElementById('visitor-chart-graph');
  if (!graphEl || !titleEl || !summaryEl || !footerCount) {
    return;
  }

  titleEl.textContent = chartData.title;
  summaryEl.textContent = `${chartData.total} visite${chartData.total === 1 ? '' : 's'} · ${chartData.subtitle}`;
  footerCount.textContent = chartData.allTime;

  const width = 400;
  const height = 240;
  const padding = 28;
  const maxValue = Math.max(...chartData.values, 1);
  const barCount = chartData.values.length;
  const barSpacing = 8;
  const barWidth = Math.max(16, (width - padding * 2 - barSpacing * (barCount - 1)) / barCount);

  const bars = chartData.values.map((value, index) => {
    const x = padding + index * (barWidth + barSpacing);
    const barHeight = (height - padding * 2) * (value / maxValue);
    const y = height - padding - barHeight;
    return `
                <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="5" fill="currentColor" opacity="0.9" />
                <text x="${x + barWidth / 2}" y="${height - padding + 14}" text-anchor="middle" font-size="10" fill="currentColor">${chartData.labels[index]}</text>
              `;
  }).join('');

  const gridLines = [1, 2, 3, 4].map(i => {
    const y = padding + ((height - padding * 2) / 4) * i;
    return `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="currentColor" opacity="0.15" />`;
  }).join('');

  graphEl.innerHTML = `
              <svg viewBox="0 0 ${width} ${height}" style="width:100%; height:100%; color: var(--text-color);">
                <rect width="100%" height="100%" fill="transparent" />
                ${gridLines}
                ${bars}
              </svg>
            `;
}

function toggleVisitorChart() {
  const panel = document.getElementById('visitor-chart-panel');
  if (!panel) {
    return;
  }
  if (panel.style.display === 'none' || panel.style.display === '') {
    setActiveVisitorPeriod(activeVisitorPeriod);
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
}

function closeVisitorChart() {
  const panel = document.getElementById('visitor-chart-panel');
  if (panel) {
    panel.style.display = 'none';
  }
}

function initVisitorChartButtons() {
  const buttons = document.querySelectorAll('.visitor-period-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      setActiveVisitorPeriod(button.dataset.period);
    });
  });
}

window.addEventListener('load', updateVisitorCounter);
window.addEventListener('load', () => {
  const counterEl = document.getElementById('visitor-counter');
  const closeBtn = document.getElementById('visitor-chart-close');
  if (counterEl) {
    counterEl.addEventListener('click', toggleVisitorChart);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeVisitorChart);
  }
  initVisitorChartButtons();
  setActiveVisitorPeriod(activeVisitorPeriod);
});