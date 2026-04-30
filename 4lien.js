/*4LIEN CROSSWORD*/

(function () {
  const CLUES_A = [
    { n: 1, text: 'Pays et Paysans' },
    { n: 3, text: 'ARc⟁diA renverse les [\u2026]' },
    { n: 5, text: 'Aursyl est la science des [\u2026]' },
    { n: 7, text: 'ARc⟁diA est le [\u2026] pour Aursyl' },
    { n: 8, text: 'ARc⟁diA joue les [\u2026]' },
    { n: 9, text: 'Tournage en direct' },
    { n: 12, text: 'Aursyl est le [\u2026] pour ARc⟁diA' },
  ];
  const CLUES_D = [
    { n: 2, text: "Chacun est \u2026 de l'autre" },
    { n: 4, text: 'Aursyl jette un [\u2026]' },
    { n: 6, text: 'Question pour rus\u00E9' },
    { n: 9, text: "Chacun est [\u2026] avec l'autre" },
    { n: 10, text: "Ce n'est pas fait pour les [\u2026]" },
    { n: 11, text: 'Aursyl vend du [\u2026]' },
    { n: 12, text: 'Nous sommes les plus [\u2026]' },
  ];

  const SOL = {
    '1A': ['X', 'A', 'T', 'I', 'O', 'N'],
    '3A': ['A', 'R', 'M', 'E', 'S'],
    '5A': ['F', 'A', 'I', 'L', 'L', 'E', 'S'],
    '7A': ['D', 'I', 'V', 'E', 'R', 'T', 'I', 'S', 'S', 'E', 'M', 'E', 'N', 'T'],
    '8A': ['I', 'G', 'N', 'O', 'R', 'A', 'N', 'T', 'S'],
    '9A': ['S', 'I', 'M', 'U', 'L', 'A', 'T', 'I', 'O', 'N'],
    '12A': ['D', '\u00C9', 'G', 'U', 'I', 'S', 'E', 'M', 'E', 'N', 'T'],
    '2D': ['A', 'G', 'A', 'C', '\u00C9'],
    '4D': ['M', 'A', 'L', '\u00C9', 'F', 'I', 'C', 'E'],
    '6D': ['D', 'E', 'V', 'I', 'N', 'E', 'T', 'T', 'E'],
    '9D': ['S', '\u00C9', 'V', '\u00C8', 'R', 'E'],
    '10D': ['P', 'E', 'U', 'R', 'E', 'U', 'X'],
    '11D': ['D', 'E', 'S', 'T', 'I', 'N'],
    '12D': ['D', '\u00C9', 'V', 'I', 'A', 'N', 'T', 'S'],
  };

  const WSTART = {
    '1A': [0, 0],
    '3A': [2, 1],
    '5A': [6, 3],
    '7A': [9, 0],
    '8A': [11, 9],
    '9A': [12, 0],
    '12A': [16, 3],
    '2D': [0, 1],
    '4D': [2, 3],
    '6D': [8, 9],
    '9D': [12, 0],
    '10D': [14, 6],
    '11D': [15, 11],
    '12D': [16, 3],
  };

  const ACTIVE = [
    [0, 0, '1'],
    [0, 1, '2'],
    [0, 2, ''],
    [0, 3, ''],
    [0, 4, ''],
    [0, 5, ''],
    [1, 1, ''],
    [2, 1, '3'],
    [2, 2, ''],
    [2, 3, '4'],
    [2, 4, ''],
    [2, 5, ''],
    [3, 1, ''],
    [3, 3, ''],
    [4, 1, ''],
    [4, 3, ''],
    [5, 3, ''],
    [6, 3, '5'],
    [6, 4, ''],
    [6, 5, ''],
    [6, 6, ''],
    [6, 7, ''],
    [6, 8, ''],
    [6, 9, ''],
    [7, 3, ''],
    [8, 3, ''],
    [8, 9, '6'],
    [9, 0, '7'],
    [9, 1, ''],
    [9, 2, ''],
    [9, 3, ''],
    [9, 4, ''],
    [9, 5, ''],
    [9, 6, ''],
    [9, 7, ''],
    [9, 8, ''],
    [9, 9, ''],
    [9, 10, ''],
    [9, 11, ''],
    [9, 12, ''],
    [9, 13, ''],
    [10, 9, ''],
    [11, 9, '8'],
    [11, 10, ''],
    [11, 11, ''],
    [11, 12, ''],
    [11, 13, ''],
    [11, 14, ''],
    [11, 15, ''],
    [11, 16, ''],
    [12, 0, '9'],
    [12, 1, ''],
    [12, 2, ''],
    [12, 3, ''],
    [12, 4, ''],
    [12, 5, ''],
    [12, 6, ''],
    [12, 7, ''],
    [12, 8, ''],
    [12, 9, ''],
    [13, 0, ''],
    [13, 9, ''],
    [14, 0, ''],
    [14, 6, '10'],
    [14, 9, ''],
    [15, 0, ''],
    [15, 6, ''],
    [15, 9, ''],
    [15, 11, '11'],
    [16, 0, ''],
    [16, 3, '12'],
    [16, 4, ''],
    [16, 5, ''],
    [16, 6, ''],
    [16, 7, ''],
    [16, 8, ''],
    [16, 9, ''],
    [16, 10, ''],
    [16, 11, ''],
    [16, 12, ''],
    [16, 13, ''],
    [17, 0, ''],
    [17, 3, ''],
    [17, 6, ''],
    [17, 11, ''],
    [18, 3, ''],
    [18, 6, ''],
    [18, 11, ''],
    [19, 3, ''],
    [19, 6, ''],
    [19, 11, ''],
    [20, 3, ''],
    [20, 6, ''],
    [20, 11, ''],
    [21, 3, ''],
    [22, 3, ''],
    [23, 3, ''],
  ];

  const cellActive = {};
  const cellNum = {};
  ACTIVE.forEach(([r, c, n]) => {
    cellActive[r + ',' + c] = true;
    if (n) cellNum[r + ',' + c] = n;
  });

  const EXPECTED = {};
  Object.keys(SOL).forEach((wkey) => {
    const [wr, wc] = WSTART[wkey];
    const dir = wkey.slice(-1);
    SOL[wkey].forEach((ch, i) => {
      const r = wr + (dir === 'D' ? i : 0);
      const c = wc + (dir === 'A' ? i : 0);
      EXPECTED[r + ',' + c] = ch;
    });
  });

  const userGrid = {};
  let selected = null;

  function buildGrid() {
    const table = document.getElementById('cw-grid');
    table.innerHTML = '';
    const ROWS = 24,
      COLS = 17;
    for (let r = 0; r < ROWS; r++) {
      const tr = document.createElement('tr');
      for (let c = 0; c < COLS; c++) {
        const key = r + ',' + c;
        const active = !!cellActive[key];
        const td = document.createElement('td');
        td.style.cssText =
          'width:28px;height:28px;padding:0;position:relative;' +
          (active
            ? 'border:1px solid var(--text-color);background:var(--bg-color);'
            : 'border:none;background:transparent;');
        if (active) {
          if (cellNum[key]) {
            const s = document.createElement('span');
            s.textContent = cellNum[key];
            s.style.cssText =
              'position:absolute;top:1px;left:2px;font-size:8px;line-height:1;pointer-events:none;color:var(--text-color);';
            td.appendChild(s);
          }
          const inp = document.createElement('input');
          inp.maxLength = 1;
          inp.id = 'cw-cell-' + r + '-' + c;
          inp.name = 'cw-cell-' + r + '-' + c;
          inp.autocomplete = 'off';
          inp.dataset.r = r;
          inp.dataset.c = c;
          inp.style.cssText =
            'position:absolute;inset:0;width:100%;height:100%;border:none;background:transparent;' +
            'text-align:center;font-size:13px;font-weight:bold;text-transform:uppercase;' +
            'color:var(--text-color);cursor:pointer;outline:none;padding-top:10px;box-sizing:border-box;';
          inp.addEventListener('click', onCellClick);
          inp.addEventListener('keydown', onKeyDown);
          inp.addEventListener('input', onInput);
          td.appendChild(inp);
        }
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    buildClues();
  }

  function inp(r, c) {
    return document.querySelector('#cw-grid input[data-r="' + r + '"][data-c="' + c + '"]');
  }

  function onCellClick(e) {
    const r = +e.target.dataset.r,
      c = +e.target.dataset.c;
    if (selected && selected.r === r && selected.c === c) {
      const other = selected.dir === 'A' ? 'D' : 'A';
      if (getWord(r, c, other)) selected = { r, c, dir: other };
    } else {
      const prefer = selected ? selected.dir : 'A';
      const dir = getWord(r, c, prefer) ? prefer : getWord(r, c, 'A') ? 'A' : 'D';
      selected = { r, c, dir };
    }
    highlight();
    showClue();
  }

  function onKeyDown(e) {
    if (!selected) return;
    const { r, c, dir } = selected;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      move(r, c, 0, 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      move(r, c, 0, -1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      move(r, c, 1, 0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      move(r, c, -1, 0);
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      const el = inp(r, c);
      if (el && el.value) {
        el.value = '';
        delete userGrid[r + ',' + c];
      } else {
        const [dr, dc] = dir === 'A' ? [0, -1] : [-1, 0];
        if (cellActive[r + dr + ',' + (c + dc)]) {
          selected = { r: r + dr, c: c + dc, dir };
          const ni = inp(r + dr, c + dc);
          if (ni) {
            ni.value = '';
            delete userGrid[r + dr + ',' + (c + dc)];
            ni.focus();
          }
          highlight();
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      nextWord(e.shiftKey);
    }
  }

  function onInput(e) {
    const r = +e.target.dataset.r,
      c = +e.target.dataset.c;
    const v = e.target.value.toUpperCase().replace(/[^A-Z\u00C0-\u00FF]/g, '');
    e.target.value = v;
    if (v) userGrid[r + ',' + c] = v;
    else delete userGrid[r + ',' + c];
    e.target.style.color = 'var(--text-color)';
    if (v && selected) {
      const { dir } = selected;
      const nr = r + (dir === 'D' ? 1 : 0),
        nc = c + (dir === 'A' ? 1 : 0);
      if (cellActive[nr + ',' + nc]) {
        selected = { r: nr, c: nc, dir };
        inp(nr, nc)?.focus();
        highlight();
      }
    }
  }

  function move(r, c, dr, dc) {
    const nr = r + dr,
      nc = c + dc;
    if (cellActive[nr + ',' + nc]) {
      selected = { r: nr, c: nc, dir: selected.dir };
      inp(nr, nc)?.focus();
      highlight();
      showClue();
    }
  }

  function getWord(r, c, dir) {
    for (const wk of Object.keys(WSTART)) {
      if (!wk.endsWith(dir)) continue;
      const [wr, wc] = WSTART[wk];
      const len = SOL[wk].length;
      for (let i = 0; i < len; i++) {
        const cr = wr + (dir === 'D' ? i : 0),
          cc = wc + (dir === 'A' ? i : 0);
        if (cr === r && cc === c) return wk;
      }
    }
    return null;
  }

  function wordCells(wk) {
    const [wr, wc] = WSTART[wk],
      dir = wk.slice(-1);
    return SOL[wk].map((_, i) => ({
      r: wr + (dir === 'D' ? i : 0),
      c: wc + (dir === 'A' ? i : 0),
    }));
  }

  function highlight() {
    document.querySelectorAll('#cw-grid td').forEach((td) => {
      if (
        cellActive[
          (+td.children[td.children.length - 1]?.dataset?.r || '') +
            ',' +
            (+td.children[td.children.length - 1]?.dataset?.c || '')
        ] ||
        true
      )
        td.style.background = 'var(--bg-color)';
    });
    document.querySelectorAll('#cw-grid input').forEach((el) => {
      el.parentElement.style.background = 'var(--bg-color)';
    });
    if (!selected) return;
    const wk = getWord(selected.r, selected.c, selected.dir);
    if (wk)
      wordCells(wk).forEach(({ r, c }) => {
        const el = inp(r, c);
        if (el) el.parentElement.style.background = 'rgba(128,128,255,0.18)';
      });
    const cur = inp(selected.r, selected.c);
    if (cur) cur.parentElement.style.background = 'rgba(128,128,255,0.45)';
  }

  function buildClues() {
    const ao = document.getElementById('cw-across'),
      dw = document.getElementById('cw-down');
    ao.innerHTML = '';
    dw.innerHTML = '';
    CLUES_A.forEach(({ n, text }) => {
      const li = document.createElement('li');
      li.value = n;
      li.textContent = text;
      li.style.cursor = 'pointer';
      li.addEventListener('click', () => jumpTo(n + 'A'));
      ao.appendChild(li);
    });
    CLUES_D.forEach(({ n, text }) => {
      const li = document.createElement('li');
      li.value = n;
      li.textContent = text;
      li.style.cursor = 'pointer';
      li.addEventListener('click', () => jumpTo(n + 'D'));
      dw.appendChild(li);
    });
  }

  function jumpTo(wk) {
    if (!WSTART[wk]) return;
    const [r, c] = WSTART[wk];
    selected = { r, c, dir: wk.slice(-1) };
    inp(r, c)?.focus();
    highlight();
    showClue();
  }

  function showClue() {
    const el = document.getElementById('cw-clue-active');
    if (!selected) {
      el.textContent = 'Cliquez une case';
      return;
    }
    const wk = getWord(selected.r, selected.c, selected.dir);
    if (!wk) {
      el.textContent = '';
      return;
    }
    const n = parseInt(wk),
      dir = wk.slice(-1);
    const list = dir === 'A' ? CLUES_A : CLUES_D;
    const cl = list.find((x) => x.n === n);
    el.textContent = cl ? n + ' ' + (dir === 'A' ? '→' : '↓') + ' ' + cl.text : '';
  }

  function nextWord(rev) {
    const all = [...CLUES_A.map((x) => x.n + 'A'), ...CLUES_D.map((x) => x.n + 'D')];
    const cur = selected ? getWord(selected.r, selected.c, selected.dir) : null;
    const idx = cur ? all.indexOf(cur) : -1;
    jumpTo(all[(idx + (rev ? -1 : 1) + all.length) % all.length]);
  }

  window.cwVerify = function () {
    let ok = 0,
      total = 0;
    document.querySelectorAll('#cw-grid input').forEach((el) => {
      const key = el.dataset.r + ',' + el.dataset.c;
      const exp = EXPECTED[key];
      if (!exp) return;
      total++;
      const val = (el.value || '').toUpperCase();
      if (val === '') {
        el.style.color = 'var(--text-color)';
      } else if (val === exp) {
        ok++;
        el.style.color = '#27ae60';
      } else {
        el.style.color = '#e74c3c';
      }
    });
    const msg = document.getElementById('cw-msg');
    const filled = document.querySelectorAll('#cw-grid input');
    let filledCount = 0;
    filled.forEach((el) => {
      if (el.value) filledCount++;
    });
    if (filledCount === 0) {
      msg.textContent = '';
      return;
    }
    if (ok === total) {
      msg.textContent = '✓ Parfait !';
      msg.style.color = '#27ae60';
    } else {
      msg.textContent = ok + '/' + total + ' corrects';
      msg.style.color = '#e67e22';
    }
  };

  window.cwReveal = function () {
    document.querySelectorAll('#cw-grid input').forEach((el) => {
      const key = el.dataset.r + ',' + el.dataset.c;
      const exp = EXPECTED[key];
      if (exp) {
        el.value = exp;
        userGrid[key] = exp;
        el.style.color = '#2980b9';
      }
    });
    document.getElementById('cw-msg').textContent = '';
  };

  window.cwReset = function () {
    document.querySelectorAll('#cw-grid input').forEach((el) => {
      el.value = '';
      el.style.color = 'var(--text-color)';
      el.parentElement.style.background = 'var(--bg-color)';
    });
    Object.keys(userGrid).forEach((k) => delete userGrid[k]);
    document.getElementById('cw-msg').textContent = '';
    selected = null;
  };

  buildGrid();
})();
