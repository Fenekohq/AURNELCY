//A6es Table Memory

window.a6esMemoryState = { allHidden: false, tableCells: null };

function updateA6esButton() {
  const btn = document.getElementById('toggleAllBtn');
  if (btn) {
    btn.textContent = window.a6esMemoryState.allHidden ? '🙈' : '🐵';
  }
}

function toggleA6esMemory() {
  const originalDiv = document.getElementById('A6es-original');
  const swapDiv = document.getElementById('A6es-swap');

  const visibleTable =
    originalDiv.style.display !== 'none'
      ? originalDiv.querySelector('.A6es')
      : swapDiv.querySelector('.A6es');

  if (!visibleTable) return;

  const cells = Array.from(visibleTable.querySelectorAll('tbody td'));

  if (window.a6esMemoryState.allHidden) {
    cells.forEach((td) => {
      if (td.dataset.original) {
        td.innerHTML = td.dataset.original;
        td.classList.remove('mem-hidden');
        td.style.minWidth = '';
      }
    });
    window.a6esMemoryState.allHidden = false;
  } else {
    cells.forEach((td) => {
      if (!td.dataset.original) {
        td.dataset.original = td.innerHTML;
        const w = td.offsetWidth || 0;
        if (w) td.dataset.width = w;
      }
      const w = td.dataset.width || td.offsetWidth || 0;
      if (w) td.style.minWidth = w + 'px';
      td.innerHTML = '<button class="mem-btn" aria-label="Hidden cell">?</button>';
      td.classList.add('mem-hidden');
    });
    window.a6esMemoryState.allHidden = true;
  }
  updateA6esButton();
}

function applyMemoryGame(tableElement) {
  if (!tableElement) return;

  const cells = Array.from(tableElement.querySelectorAll('tbody td'));

  cells.forEach((td) => {
    if (!td.dataset.original) {
      td.dataset.original = td.innerHTML;
      const w = Math.ceil(td.offsetWidth || 0);
      if (w) td.dataset.width = w;
    }
  });

  if (window.a6esMemoryState.allHidden) {
    cells.forEach((td) => {
      const w = td.dataset.width || td.offsetWidth || 0;
      if (w) td.style.minWidth = w + 'px';
      td.innerHTML = '<button class="mem-btn" aria-label="Hidden cell">?</button>';
      td.classList.add('mem-hidden');
    });
  }

  tableElement.addEventListener('click', (e) => {
    const btn = e.target.closest('.mem-btn');
    if (!btn) return;

    const td = btn.closest('td');
    if (!td || !td.dataset.original) return;

    td.innerHTML = td.dataset.original;
    td.classList.remove('mem-hidden');
    td.style.minWidth = '';
  });

  const style = document.createElement('style');
  style.innerHTML = `
      #toggleAllBtn {
        padding: 8px 16px;
        font-size: 1rem;
        border-radius: 4px;
        cursor: pointer;
        background: var(--bg-color);
        color: var(--text-color);
        border: 1px solid var(--text-color);
        border-radius: 6px; 
        transition: all 0.2s ease;
        margin: 10px 0;
      }

      .mem-btn {
        display: block;
        width: 100%;
        height: 100%;
        padding: 8px;
        margin: 0;
        font-size: 1em;
        box-sizing: border-box;
        border-radius: 6px;
        cursor: pointer;
        text-align: center;
        background: var(--bg-color);
        color: var(--text-color);
        border: 1px solid var(--border-color);
      }

      .mem-hidden {
        vertical-align: middle;
        text-align: center;
      }

      .A6es td img { max-width: 100%; height: auto; display: block; }
    `;
  if (!document.head.querySelector('style[data-memory]')) {
    style.setAttribute('data-memory', 'true');
    document.head.appendChild(style);
  }

  updateA6esButton();
}

document.addEventListener('DOMContentLoaded', () => {
  const originalTable = document.querySelector('#A6es-original .A6es');
  if (originalTable) {
    applyMemoryGame(originalTable);
  }

  const toggleAllBtn = document.getElementById('toggleAllBtn');
  if (toggleAllBtn && !toggleAllBtn.hasMemoryListener) {
    toggleAllBtn.addEventListener('click', toggleA6esMemory);
    toggleAllBtn.hasMemoryListener = true;
  }
});
