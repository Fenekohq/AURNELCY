function setupTableToggle(sourceTableSelector, originalDivId, swapDivId, buttonId) {
  const sourceTable = document.querySelector(sourceTableSelector);
  const originalDiv = document.getElementById(originalDivId);
  const swapDiv = document.getElementById(swapDivId);
  const btn = document.getElementById(buttonId);

  if (!sourceTable || !swapDiv || !btn) return;

  const sourceCells = Array.from(sourceTable.querySelectorAll('tbody td'));
  sourceCells.forEach((td) => {
    if (!td.dataset.original) {
      td.dataset.original = td.innerHTML;
      const w = Math.ceil(td.offsetWidth || 0);
      if (w) td.dataset.width = w;
    }
  });

  const rows = Array.from(sourceTable.rows);
  const grid = [];
  const metaGrid = [];
  const cellDataMap = [];

  rows.forEach((row, rowIndex) => {
    let colIndex = 0;
    Array.from(row.cells).forEach((cell) => {
      while (grid[rowIndex] && grid[rowIndex][colIndex] !== undefined) colIndex++;

      const cSpan = cell.colSpan || 1;
      const rSpan = cell.rowSpan || 1;
      const content = cell.innerHTML;
      const cellData = {
        original: cell.dataset.original,
        index: cell.dataset.index,
        width: cell.dataset.width,
      };

      for (let r = 0; r < rSpan; r++) {
        if (!grid[rowIndex + r]) grid[rowIndex + r] = [];
        if (!metaGrid[rowIndex + r]) metaGrid[rowIndex + r] = [];
        if (!cellDataMap[rowIndex + r]) cellDataMap[rowIndex + r] = [];
        for (let c = 0; c < cSpan; c++) {
          grid[rowIndex + r][colIndex + c] = content;
          cellDataMap[rowIndex + r][colIndex + c] = cellData;
          metaGrid[rowIndex + r][colIndex + c] =
            r === 0 && c === 0
              ? { isOrigin: true, nRS: cSpan, nCS: rSpan, tag: cell.tagName, css: cell.className }
              : { isOrigin: false };
        }
      }
      colIndex += cSpan;
    });
  });

  const swappedTable = document.createElement('table');
  swappedTable.className = sourceTable.className;
  swappedTable.setAttribute('border', sourceTable.getAttribute('border') || '1');

  for (let j = 0; j < (grid[0]?.length || 0); j++) {
    const tr = document.createElement('tr');
    for (let i = 0; i < grid.length; i++) {
      const meta = metaGrid[i][j];
      if (meta?.isOrigin) {
        const newCell = document.createElement(meta.tag);
        newCell.innerHTML = grid[i][j];
        if (meta.nRS > 1) newCell.rowSpan = meta.nRS;
        if (meta.nCS > 1) newCell.colSpan = meta.nCS;
        if (meta.css) newCell.className = meta.css;

        // Preserve data attributes
        if (cellDataMap[i][j]) {
          if (cellDataMap[i][j].original) newCell.dataset.original = cellDataMap[i][j].original;
          if (cellDataMap[i][j].index) newCell.dataset.index = cellDataMap[i][j].index;
          if (cellDataMap[i][j].width) newCell.dataset.width = cellDataMap[i][j].width;
        }

        tr.appendChild(newCell);
      }
    }
    swappedTable.appendChild(tr);
  }
  swapDiv.appendChild(swappedTable);

  if (sourceTableSelector === '.A6es') {
    applyMemoryGame(swappedTable);
  }

  btn.addEventListener('click', () => {
    const isDefault = swapDiv.style.display === 'none';

    if (isDefault) {
      originalDiv.style.display = 'none';
      swapDiv.style.display = 'block';
      btn.textContent = 'Switch to Vertical View';

      if (sourceTableSelector === '.A6es') {
        syncMemoryGameState(swapDiv.querySelector('.A6es'));
      }
    } else {
      originalDiv.style.display = 'block';
      swapDiv.style.display = 'none';
      btn.textContent = 'Switch to Horizontal View';

      if (sourceTableSelector === '.A6es') {
        syncMemoryGameState(originalDiv.querySelector('.A6es'));
      }
    }
  });
}

function syncMemoryGameState(tableElement) {
  if (!tableElement || !window.a6esMemoryState) return;

  const cells = Array.from(tableElement.querySelectorAll('tbody td'));

  // Make sure ALL cells have data attributes set up
  cells.forEach((td) => {
    if (!td.dataset.original) {
      td.dataset.original = td.innerHTML;
      const w = td.offsetWidth || 0;
      if (w) td.dataset.width = w;
    }
  });

  // Apply the current global memory state to all cells in this table
  if (window.a6esMemoryState.allHidden) {
    cells.forEach((td) => {
      const w = td.dataset.width || td.offsetWidth || 0;
      if (w) td.style.minWidth = w + 'px';
      td.innerHTML = '<button class="mem-btn" aria-label="Hidden cell">?</button>';
      td.classList.add('mem-hidden');
    });
  } else {
    cells.forEach((td) => {
      if (td.dataset.original) {
        td.innerHTML = td.dataset.original;
        td.classList.remove('mem-hidden');
        td.style.minWidth = '';
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setupTableToggle('.snewlc', 'snewlc-original', 'snewlc-swap', 'snewlc-toggle-btn');
  setupTableToggle('.A6es', 'A6es-original', 'A6es-swap', 'A6es-toggle-btn');
});
