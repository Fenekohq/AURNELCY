/*4LIEN CROSSWORD*/

(function () {
  const CLUES_A = [
    { n: 1, text: 'Pays et Paysans' },
    { n: 3, text: 'ARcâŸdiA renverse les […]' },
    { n: 5, text: 'Aursyl est la science des […]' },
    { n: 7, text: 'ARcâŸdiA est le […] pour Aursyl' },
    { n: 8, text: 'ARcâŸdiA joue les […]' },
    { n: 9, text: 'Tournage en direct' },
    { n: 12, text: 'Aursyl est le […] pour ARcâŸdiA' },
  ];
  const CLUES_D = [
    { n: 2, text: "Chacun est … de l'autre" },
    { n: 4, text: 'Aursyl jette un […]' },
    { n: 6, text: 'Question pour rusé' },
    { n: 9, text: "Chacun est […] avec l'autre" },
    { n: 10, text: "Ce n'est pas fait pour les […]" },
    { n: 11, text: 'Aursyl vend du […]' },
    { n: 12, text: 'Nous sommes les plus […]' },
  ];

  const SOL = {
    '1A': ['X', 'A', 'T', 'I', 'O', 'N'],
    '3A': ['A', 'R', 'M', 'E', 'S'],
    '5A': ['F', 'A', 'I', 'L', 'L', 'E', 'S'],
    '7A': ['D', 'I', 'V', 'E', 'R', 'T', 'I', 'S', 'S', 'E', 'M', 'E', 'N', 'T'],
    '8A': ['I', 'G', 'N', 'O', 'R', 'A', 'N', 'T', 'S'],
    '9A': ['S', 'I', 'M', 'U', 'L', 'A', 'T', 'I', 'O', 'N'],
    '12A': ['D', 'É', 'G', 'U', 'I', 'S', 'E', 'M', 'E', 'N', 'T'],
    '2D': ['A', 'G', 'A', 'C', 'É'],
    '4D': ['M', 'A', 'L', 'É', 'F', 'I', 'C', 'E'],
    '6D': ['D', 'E', 'V', 'I', 'N', 'E', 'T', 'T', 'E'],
    '9D': ['S', 'É', 'V', 'È', 'R', 'E'],
    '10D': ['P', 'E', 'U', 'R', 'E', 'U', 'X'],
    '11D': ['D', 'E', 'S', 'T', 'I', 'N'],
    '12D': ['D', 'É', 'V', 'I', 'A', 'N', 'T', 'S'],
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

  function getCrosswordRoot(container) {
    if (!container) return document.querySelector('[data-cw-root]');
    if (container.matches && container.matches('[data-cw-root]')) return container;
    return container.querySelector('[data-cw-root]');
  }

  function initialize4lienCrossword(container) {
    const root = getCrosswordRoot(container);
    if (!root || root.dataset.cwInitialized === 'true') return root?._cwApi || null;

    const table = root.querySelector('[data-cw-role="grid"]');
    const acrossList = root.querySelector('[data-cw-role="across"]');
    const downList = root.querySelector('[data-cw-role="down"]');
    const activeClue = root.querySelector('[data-cw-role="active-clue"]');
    const message = root.querySelector('[data-cw-role="message"]');

    if (!table || !acrossList || !downList || !activeClue || !message) return null;

    root.dataset.cwInitialized = 'true';

    const state = {
      selected: null,
      userGrid: {},
    };

    function inp(r, c) {
      return table.querySelector('input[data-r="' + r + '"][data-c="' + c + '"]');
    }

    function getWord(r, c, dir) {
      for (const wk of Object.keys(WSTART)) {
        if (!wk.endsWith(dir)) continue;
        const [wr, wc] = WSTART[wk];
        const len = SOL[wk].length;
        for (let i = 0; i < len; i++) {
          const cr = wr + (dir === 'D' ? i : 0);
          const cc = wc + (dir === 'A' ? i : 0);
          if (cr === r && cc === c) return wk;
        }
      }
      return null;
    }

    function wordCells(wk) {
      const [wr, wc] = WSTART[wk];
      const dir = wk.slice(-1);
      return SOL[wk].map((_, i) => ({
        r: wr + (dir === 'D' ? i : 0),
        c: wc + (dir === 'A' ? i : 0),
      }));
    }

    function showClue() {
      if (!state.selected) {
        activeClue.textContent = 'Cliquez une case';
        return;
      }

      const wk = getWord(state.selected.r, state.selected.c, state.selected.dir);
      if (!wk) {
        activeClue.textContent = '';
        return;
      }

      const n = parseInt(wk, 10);
      const dir = wk.slice(-1);
      const list = dir === 'A' ? CLUES_A : CLUES_D;
      const clue = list.find((item) => item.n === n);
      activeClue.textContent = clue ? n + ' ' + (dir === 'A' ? '→' : '↓') + ' ' + clue.text : '';
    }

    function highlight() {
      table.querySelectorAll('td').forEach((td) => {
        td.style.background = 'var(--bg-color)';
      });

      if (!state.selected) return;

      const wk = getWord(state.selected.r, state.selected.c, state.selected.dir);
      if (wk) {
        wordCells(wk).forEach(({ r, c }) => {
          const el = inp(r, c);
          if (el) el.parentElement.style.background = 'rgba(128,128,255,0.18)';
        });
      }

      const current = inp(state.selected.r, state.selected.c);
      if (current) current.parentElement.style.background = 'rgba(128,128,255,0.45)';
    }

    function move(r, c, dr, dc) {
      const nr = r + dr;
      const nc = c + dc;
      if (cellActive[nr + ',' + nc]) {
        state.selected = { r: nr, c: nc, dir: state.selected.dir };
        inp(nr, nc)?.focus();
        highlight();
        showClue();
      }
    }

    function nextWord(reverse) {
      const all = [...CLUES_A.map((item) => item.n + 'A'), ...CLUES_D.map((item) => item.n + 'D')];
      const current = state.selected ? getWord(state.selected.r, state.selected.c, state.selected.dir) : null;
      const index = current ? all.indexOf(current) : -1;
      jumpTo(all[(index + (reverse ? -1 : 1) + all.length) % all.length]);
    }

    function jumpTo(wk) {
      if (!WSTART[wk]) return;
      const [r, c] = WSTART[wk];
      state.selected = { r, c, dir: wk.slice(-1) };
      inp(r, c)?.focus();
      highlight();
      showClue();
    }

    function onCellClick(event) {
      const r = +event.target.dataset.r;
      const c = +event.target.dataset.c;

      if (state.selected && state.selected.r === r && state.selected.c === c) {
        const other = state.selected.dir === 'A' ? 'D' : 'A';
        if (getWord(r, c, other)) state.selected = { r, c, dir: other };
      } else {
        const preferredDir = state.selected ? state.selected.dir : 'A';
        const dir = getWord(r, c, preferredDir) ? preferredDir : getWord(r, c, 'A') ? 'A' : 'D';
        state.selected = { r, c, dir };
      }

      highlight();
      showClue();
    }

    function onKeyDown(event) {
      if (!state.selected) return;

      const { r, c, dir } = state.selected;

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        move(r, c, 0, 1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        move(r, c, 0, -1);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        move(r, c, 1, 0);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        move(r, c, -1, 0);
      } else if (event.key === 'Backspace') {
        event.preventDefault();
        const currentInput = inp(r, c);
        if (currentInput && currentInput.value) {
          currentInput.value = '';
          delete state.userGrid[r + ',' + c];
        } else {
          const [dr, dc] = dir === 'A' ? [0, -1] : [-1, 0];
          if (cellActive[r + dr + ',' + (c + dc)]) {
            state.selected = { r: r + dr, c: c + dc, dir };
            const nextInput = inp(r + dr, c + dc);
            if (nextInput) {
              nextInput.value = '';
              delete state.userGrid[r + dr + ',' + (c + dc)];
              nextInput.focus();
            }
            highlight();
            showClue();
          }
        }
      } else if (event.key === 'Tab') {
        event.preventDefault();
        nextWord(event.shiftKey);
      }
    }

    function onInput(event) {
      const r = +event.target.dataset.r;
      const c = +event.target.dataset.c;
      const value = event.target.value.toUpperCase().replace(/[^A-ZÀ-ÿ]/g, '');

      event.target.value = value;
      if (value) {
        state.userGrid[r + ',' + c] = value;
      } else {
        delete state.userGrid[r + ',' + c];
      }

      event.target.style.color = 'var(--text-color)';

      if (value && state.selected) {
        const { dir } = state.selected;
        const nr = r + (dir === 'D' ? 1 : 0);
        const nc = c + (dir === 'A' ? 1 : 0);
        if (cellActive[nr + ',' + nc]) {
          state.selected = { r: nr, c: nc, dir };
          inp(nr, nc)?.focus();
          highlight();
          showClue();
        }
      }
    }

    function buildClues() {
      acrossList.innerHTML = '';
      downList.innerHTML = '';

      CLUES_A.forEach(({ n, text }) => {
        const li = document.createElement('li');
        li.value = n;
        li.textContent = text;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => jumpTo(n + 'A'));
        acrossList.appendChild(li);
      });

      CLUES_D.forEach(({ n, text }) => {
        const li = document.createElement('li');
        li.value = n;
        li.textContent = text;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => jumpTo(n + 'D'));
        downList.appendChild(li);
      });
    }

    function buildGrid() {
      table.innerHTML = '';
      const ROWS = 24;
      const COLS = 17;

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
              const number = document.createElement('span');
              number.textContent = cellNum[key];
              number.style.cssText =
                'position:absolute;top:1px;left:2px;font-size:8px;line-height:1;pointer-events:none;color:var(--text-color);';
              td.appendChild(number);
            }

            const input = document.createElement('input');
            input.maxLength = 1;
            input.autocomplete = 'off';
            input.dataset.r = r;
            input.dataset.c = c;
            input.style.cssText =
              'position:absolute;inset:0;width:100%;height:100%;border:none;background:transparent;' +
              'text-align:center;font-size:13px;font-weight:bold;text-transform:uppercase;' +
              'color:var(--text-color);cursor:pointer;outline:none;padding-top:10px;box-sizing:border-box;';
            input.addEventListener('click', onCellClick);
            input.addEventListener('keydown', onKeyDown);
            input.addEventListener('input', onInput);
            td.appendChild(input);
          }

          tr.appendChild(td);
        }

        table.appendChild(tr);
      }

      buildClues();
    }

    function verify() {
      let correct = 0;
      let total = 0;

      table.querySelectorAll('input').forEach((input) => {
        const key = input.dataset.r + ',' + input.dataset.c;
        const expected = EXPECTED[key];
        if (!expected) return;

        total++;
        const value = (input.value || '').toUpperCase();

        if (value === '') {
          input.style.color = 'var(--text-color)';
        } else if (value === expected) {
          correct++;
          input.style.color = '#27ae60';
        } else {
          input.style.color = '#e74c3c';
        }
      });

      let filledCount = 0;
      table.querySelectorAll('input').forEach((input) => {
        if (input.value) filledCount++;
      });

      if (filledCount === 0) {
        message.textContent = '';
        return;
      }

      if (correct === total) {
        message.textContent = '✓ Parfait !';
        message.style.color = '#27ae60';
      } else {
        message.textContent = correct + '/' + total + ' corrects';
        message.style.color = '#e67e22';
      }
    }

    function reveal() {
      table.querySelectorAll('input').forEach((input) => {
        const key = input.dataset.r + ',' + input.dataset.c;
        const expected = EXPECTED[key];
        if (!expected) return;

        input.value = expected;
        state.userGrid[key] = expected;
        input.style.color = '#2980b9';
      });

      message.textContent = '';
    }

    function reset() {
      table.querySelectorAll('input').forEach((input) => {
        input.value = '';
        input.style.color = 'var(--text-color)';
        input.parentElement.style.background = 'var(--bg-color)';
      });

      Object.keys(state.userGrid).forEach((key) => delete state.userGrid[key]);
      message.textContent = '';
      state.selected = null;
      highlight();
      showClue();
    }

    root.querySelectorAll('[data-cw-action]').forEach((button) => {
      const action = button.getAttribute('data-cw-action');
      if (action === 'verify') button.addEventListener('click', verify);
      if (action === 'reveal') button.addEventListener('click', reveal);
      if (action === 'reset') button.addEventListener('click', reset);
    });

    buildGrid();
    showClue();

    const api = { verify, reveal, reset, jumpTo, root };
    root._cwApi = api;
    return api;
  }

  window.initialize4lienCrossword = initialize4lienCrossword;

  const primaryApi = initialize4lienCrossword(document.getElementById('Alien-original'));
  if (primaryApi) {
    window.cwVerify = primaryApi.verify;
    window.cwReveal = primaryApi.reveal;
    window.cwReset = primaryApi.reset;
  }
})();
