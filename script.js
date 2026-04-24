//service-worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
}

//Blur Summary on RING

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.detail-MNC > summary').forEach(summary => {
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
    if (
      floatingNavWrapper.classList.contains('open') &&
      !floatingNavWrapper.contains(e.target)
    ) {
      floatingNavWrapper.classList.remove('open');
    }
  });
});

//(D⦾MIN⦿'s EFFECT)

function initializeProgressiveScales() {
  const selectors = ['.progressive-scale-a', '.progressive-scale-b'];
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      [...text].forEach(letter => {
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

//MAGIC CIRCLE

function scrollToSection(sectionId) {
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
      const easeInOutCubic = progress < 0.5
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
  const randomDuration = 20 + (Math.random() * 10);
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
  let best = null, bestDist = Infinity;
  candidates.forEach(el => {
    if (!el.offsetParent && el.tagName !== 'BODY') return;
    const top = Math.abs(el.getBoundingClientRect().top);
    if (top < bestDist) { bestDist = top; best = el; }
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

  highlightedElements.forEach(element => {
    element.style.backgroundColor = highlightModeEnabled ? '#7F00FF' : 'transparent';
  });
}