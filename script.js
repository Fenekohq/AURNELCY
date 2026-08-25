//service-worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}

//Blur Summary on RING

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.detail-MNC > summary').forEach((summary) => {
    summary.addEventListener('mouseup', function () {
      summary.blur();
    });
  });
});

//Floating Navigation Script

document.addEventListener('DOMContentLoaded', function () {
  const floatingNavWrapper = document.getElementById('floatingNavWrapper');
  const floatingEllipse = document.getElementById('floatingEllipse');
  const floatingNavButtons = document.getElementById('floatingNavButtons');

  floatingEllipse.addEventListener('click', function () {
    floatingNavWrapper.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (floatingNavWrapper.classList.contains('open') && !floatingNavWrapper.contains(e.target)) {
      floatingNavWrapper.classList.remove('open');
    }
  });
});

//(D⦾MIN⦿'s EFFECT)

function initializeProgressiveScales() {
  const selectors = ['.progressive-scale-a', '.progressive-scale-b'];
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      const text = element.textContent;
      element.textContent = '';
      [...text].forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        element.appendChild(span);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeProgressiveScales);

//HIDDEN-TEXT

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('hidden-text')) {
      e.target.classList.toggle('revealed');
    }
  });
});

// WRITING DATES

document.addEventListener('DOMContentLoaded', function () {
  const tbody = document.getElementById('writingDatesBody');
  if (!tbody || typeof writingDates === 'undefined') return;

  const entries = Array.isArray(writingDates.entries) ? writingDates.entries.slice() : [];
  function toSortableDateParts(dateString) {
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(String(dateString).trim());
    if (!match) return null;
    return { day: match[1], month: match[2], year: match[3] };
  }

  entries.sort((a, b) => {
    const left = toSortableDateParts(a.date);
    const right = toSortableDateParts(b.date);

    if (left && right) {
      const leftKey = `${left.year}-${left.month}-${left.day}`;
      const rightKey = `${right.year}-${right.month}-${right.day}`;
      return leftKey.localeCompare(rightKey) || String(a.title).localeCompare(String(b.title));
    }

    return String(a.date).localeCompare(String(b.date)) || String(a.title).localeCompare(String(b.title));
  });

  const rowsHtml = entries
    .map((entry) => {
      const rowStyle = entry.highlight ? ' style="font-weight: bold;"' : '';
      return `<tr${rowStyle}><td>${entry.date}</td><td>${entry.title}</td></tr>`;
    })
    .join('');

  tbody.innerHTML = rowsHtml;
});

// REVEAL TABLE

document.addEventListener('DOMContentLoaded', function () {
  function toggleRevealTable(trigger) {
    const table = trigger.closest('.reveal-table');
    if (!table) return;

    const isCollapsed = table.classList.toggle('is-collapsed');
    trigger.setAttribute('aria-expanded', String(!isCollapsed));
  }

  document.addEventListener('click', function (e) {
    const trigger = e.target.closest('.reveal-table-trigger');
    if (!trigger) return;
    toggleRevealTable(trigger);
  });

  document.addEventListener('keydown', function (e) {
    const trigger = e.target.closest('.reveal-table-trigger');
    if (!trigger) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleRevealTable(trigger);
    }
  });
});

//MAGIC CIRCLE

function scrollToSection(sectionId) {
  if (sectionId === '↑') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  if (sectionId === '↓') {
    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: Math.max(0, bottom), behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;

    const duration = 800;
    const start = window.pageYOffset;
    const distance = offsetTop - start;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start + distance * easeInOutCubic);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  } else {
    console.error('Element with ID ' + sectionId + ' not found');
  }
}

//ROTATING TEXT

function setRandomDuration() {
  const circle = document.getElementById('rotatingText');
  const randomDuration = 20 + Math.random() * 10;
  circle.style.animationDuration = `${randomDuration}s`;
}

window.addEventListener('load', setRandomDuration);

function togglePause() {
  const circle = document.getElementById('rotatingText');
  const button = document.getElementById('pauseButton');

  if (circle.style.animationPlayState === 'running') {
    circle.style.animationPlayState = 'paused';
    button.textContent = '▶️';
  } else {
    circle.style.animationPlayState = 'running';
    button.textContent = '⏸️';
  }
}

//SCROLL POSITION MEMORY

window.addEventListener('beforeunload', function () {
  const candidates = document.querySelectorAll('[id]');
  let best = null,
    bestDist = Infinity;
  candidates.forEach((el) => {
    if (!el.offsetParent && el.tagName !== 'BODY') return;
    const top = Math.abs(el.getBoundingClientRect().top);
    if (top < bestDist) {
      bestDist = top;
      best = el;
    }
  });
  if (best) {
    localStorage.setItem('scrollAnchor', best.id);
    localStorage.setItem('scrollOffset', best.getBoundingClientRect().top);
  }
});

window.addEventListener('load', function () {
  const anchorId = localStorage.getItem('scrollAnchor');
  const offset = parseInt(localStorage.getItem('scrollOffset') || '0', 10);
  if (!anchorId) return;
  setTimeout(function () {
    const el = document.getElementById(anchorId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    }
  }, 300);
});

//Highlight Mode Script

let highlightModeEnabled = false;

function toggleHighlightMode() {
  highlightModeEnabled = !highlightModeEnabled;
  const status = document.getElementById('highlightStatus');
  status.style.display = 'block';

  const highlightedElements = document.querySelectorAll('.hmode');

  highlightedElements.forEach((element) => {
    element.style.backgroundColor = highlightModeEnabled ? '#7F00FF' : 'transparent';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const toggleDefinizerBtn = document.getElementById('toggle-definizer-btn');
  if (!toggleDefinizerBtn) return;

  let definizerHidden = false;

  // Store original display values on first load
  document.querySelectorAll('.definizer').forEach((element) => {
    if (!element.dataset.originalDisplay) {
      element.dataset.originalDisplay = element.style.display || 'block';
    }
  });

  toggleDefinizerBtn.addEventListener('click', function () {
    definizerHidden = !definizerHidden;
    document.querySelectorAll('.definizer').forEach((element) => {
      element.style.display = definizerHidden ? 'none' : element.dataset.originalDisplay;
    });
    toggleDefinizerBtn.textContent = definizerHidden ? '📌' : '🛑';
    toggleDefinizerBtn.title = definizerHidden ? 'Afficher les éléments definizer' : 'Cacher les éléments definizer';
  });
});

// Auto-hide UI controls after inactivity
document.addEventListener('DOMContentLoaded', function () {
  const selectors = ['.category-tag', '#themeToggle', '#floatingEllipse', '#floatingNavButtons', '#floatingNavWrapper'];
  const controls = Array.from(document.querySelectorAll(selectors.join(','))).filter(Boolean);
  if (!controls.length) return;

  // inject lightweight styles for fade animation
  const style = document.createElement('style');
  style.textContent = `
    .aurnelcy-auto-fade { transition: opacity 0.6s ease, transform 0.6s ease; opacity: 1; }
    .aurnelcy-auto-fade.aurnelcy-hidden { opacity: 0; transform: translateY(6px); pointer-events: none; }
  `;
  document.head.appendChild(style);

  controls.forEach((el) => el.classList.add('aurnelcy-auto-fade'));

  let timer = null;
  const inactivityMs = 4000;

  function hideControls() {
    const wrapper = document.getElementById('floatingNavWrapper');
    if (wrapper && wrapper.classList.contains('open')) return;
    controls.forEach((el) => el.classList.add('aurnelcy-hidden'));
  }

  function showControls() {
    controls.forEach((el) => el.classList.remove('aurnelcy-hidden'));
  }

  function resetTimer() {
    showControls();
    if (timer) clearTimeout(timer);
    timer = setTimeout(hideControls, inactivityMs);
  }

  ['mousemove', 'keydown', 'touchstart', 'scroll', 'click'].forEach((evt) => {
    window.addEventListener(evt, resetTimer, { passive: true });
  });

  // start initial timer
  timer = setTimeout(hideControls, inactivityMs);

  // when user explicitly opens the floating nav, keep controls visible briefly
  const floatingEllipse = document.getElementById('floatingEllipse');
  if (floatingEllipse) {
    floatingEllipse.addEventListener('click', function () {
      showControls();
      if (timer) clearTimeout(timer);
      timer = setTimeout(hideControls, inactivityMs);
    });
  }

  // reveal while hovering controls
  controls.forEach((el) => {
    el.addEventListener('mouseenter', showControls);
    el.addEventListener('mouseleave', function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(hideControls, inactivityMs);
    });
  });
});
