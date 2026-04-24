/*POLICE CHANGE*/

(function () {
  const fonts = [
    { name: 'Par défaut', value: 'system-ui, Monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' },
    { name: 'Arial', value: 'Arial, sans-serif' },
    { name: 'Helvetica', value: 'Helvetica, Arial, sans-serif' },
    { name: 'Times New Roman', value: '"Times New Roman", Times, serif' },
    { name: 'Georgia', value: 'Georgia, serif' },
    { name: 'Garamond', value: 'Garamond, "EB Garamond", serif' },
    { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
    { name: 'Trebuchet MS', value: '"Trebuchet MS", Helvetica, sans-serif' },
    { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
    { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
    { name: 'Courier New', value: '"Courier New", Courier, monospace' },
    { name: 'Lucida Console', value: '"Lucida Console", Monaco, monospace' },
    { name: 'Comic Sans MS', value: '"Comic Sans MS", "Comic Sans", cursive' },
    { name: 'Palatino', value: '"Palatino Linotype", Palatino, serif' },
    { name: 'Futura', value: 'Futura, "Century Gothic", sans-serif' },
  ];

  const STORAGE_KEY = 'aurnelcy-font';
  const btn = document.getElementById('fontPickerBtn');
  const dropdown = document.getElementById('fontPickerDropdown');
  const fontList = document.getElementById('fontList');

  function applyFont(value) {
    document.body.style.fontFamily = value;
    localStorage.setItem(STORAGE_KEY, value);
    fontList.querySelectorAll('.font-option').forEach(el => {
      const active = el.dataset.value === value;
      el.style.fontWeight = active ? 'bold' : 'normal';
      el.style.color = active ? 'var(--tag-active, #FF2400)' : 'var(--text-color)';
      el.style.borderColor = active ? 'var(--tag-active, #FF2400)' : 'transparent';
    });
  }

  fonts.forEach(f => {
    const item = document.createElement('button');
    item.className = 'font-option';
    item.dataset.value = f.value;
    item.textContent = f.name;
    item.style.cssText = 'display:block; width:100%; text-align:left; padding:6px 10px; border:1px solid transparent; border-radius:5px; background:none; cursor:pointer; font-family:' + f.value + '; font-size:0.95em; color:var(--text-color); transition:all 0.15s ease;';
    item.addEventListener('mouseenter', () => { item.style.background = 'rgba(128,128,128,0.1)'; });
    item.addEventListener('mouseleave', () => { item.style.background = 'none'; });
    item.addEventListener('click', () => { applyFont(f.value); dropdown.style.display = 'none'; });
    fontList.appendChild(item);
  });

  btn.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  });

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target) && e.target !== btn) dropdown.style.display = 'none';
  });

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) applyFont(saved);
})();

/*FONT SIZE CHANGE*/

(function () {
  const STORAGE_KEY = 'aurnelcy-fontsize';
  const STEP = 5;
  const MIN = 70;
  const MAX = 150;

  const btn = document.getElementById('fontSizeBtn');
  const dropdown = document.getElementById('fontSizeDropdown');
  const minusBtn = document.getElementById('fontSizeMinus');
  const plusBtn = document.getElementById('fontSizePlus');
  const resetBtn = document.getElementById('fontSizeReset');
  const valueLabel = document.getElementById('fontSizeValue');

  let current = parseInt(localStorage.getItem(STORAGE_KEY)) || 100;

  const BASE = 16; // font-size de base du body en px

  function applySize(val) {
    current = Math.min(MAX, Math.max(MIN, val));
    document.body.style.zoom = current + '%';
    valueLabel.textContent = current + '%';
    localStorage.setItem(STORAGE_KEY, current);
    minusBtn.disabled = current <= MIN;
    plusBtn.disabled = current >= MAX;
    minusBtn.style.opacity = current <= MIN ? '0.3' : '1';
    plusBtn.style.opacity = current >= MAX ? '0.3' : '1';
  }

  plusBtn.addEventListener('click', () => applySize(current + STEP));
  minusBtn.addEventListener('click', () => applySize(current - STEP));
  resetBtn.addEventListener('click', () => applySize(100));

  btn.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  });

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target) && e.target !== btn) dropdown.style.display = 'none';
  });

  applySize(current);
})();

/*BOOKMARK*/

(function () {
  const STORAGE_KEY = 'aurnelcy-bookmarks';
  const btn = document.getElementById('bookmarkBtn');
  const dropdown = document.getElementById('bookmarkDropdown');
  const addBtn = document.getElementById('bookmarkAdd');
  const list = document.getElementById('bookmarkList');
  const empty = document.getElementById('bookmarkEmpty');

  function load() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }

  function save(bookmarks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }

  function getLabel() {
    const headings = document.querySelectorAll('h1, h2, h3');
    let best = null;
    let bestTop = -Infinity;
    headings.forEach(h => {
      // Ignorer les éléments cachés ou dans un details fermé
      if (!h.offsetParent) return;
      const top = h.getBoundingClientRect().top + window.scrollY;
      if (top <= window.scrollY + 80 && top > bestTop) {
        bestTop = top;
        best = h;
      }
    });
    return best ? best.textContent.trim().slice(0, 40) : 'Position ' + Math.round(window.scrollY);
  }

  function render() {
    const bookmarks = load();
    list.innerHTML = '';
    empty.style.display = bookmarks.length === 0 ? 'block' : 'none';

    bookmarks.forEach((bm, i) => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex; align-items:center; gap:6px;';

      const goBtn = document.createElement('button');
      goBtn.textContent = bm.label;
      goBtn.title = bm.label;
      goBtn.style.cssText = 'flex:1; text-align:left; padding:6px 8px; border-radius:5px; border:1px solid var(--text-color); background:var(--bg-color); color:var(--text-color); font-size:0.85em; cursor:pointer; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;';
      goBtn.addEventListener('click', () => {
        window.scrollTo({ top: bm.scrollY, behavior: 'smooth' });
        dropdown.style.display = 'none';
      });

      const delBtn = document.createElement('button');
      delBtn.textContent = '✕';
      delBtn.style.cssText = 'width:26px; height:26px; border-radius:5px; border:1px solid var(--text-color); background:var(--bg-color); color:var(--text-color); font-size:0.8em; cursor:pointer; flex-shrink:0;';
      delBtn.addEventListener('click', () => {
        const bms = load();
        bms.splice(i, 1);
        save(bms);
        render();
      });

      row.appendChild(goBtn);
      row.appendChild(delBtn);
      list.appendChild(row);
    });
  }

  addBtn.addEventListener('click', () => {
    const bms = load();
    bms.push({ label: getLabel(), scrollY: window.scrollY });
    save(bms);
    render();
  });

  btn.addEventListener('click', e => {
    e.stopPropagation();
    render();
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  });

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target) && e.target !== btn) dropdown.style.display = 'none';
  });
})();