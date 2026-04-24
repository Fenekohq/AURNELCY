document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector(".gliobe-table");
  const planetarium = document.getElementById("planetarium-view");
  const planetariumContent = document.getElementById("planetarium-content");
  const overlay = document.getElementById("planetarium-overlay");

  for (let planetIndex = 1; planetIndex <= 7; planetIndex++) {
    const columnCells = Array.from(table.querySelectorAll(`td:nth-child(${planetIndex}), th:nth-child(${planetIndex})`));
    columnCells.forEach(cell => {
      cell.dataset.planet = planetIndex;
      cell.style.cursor = "pointer";
      cell.addEventListener("click", (e) => {
        e.stopPropagation();
        showPlanetView(planetIndex);
      });
    });
  }

  function showPlanetView(planetIndex) {
    const rows = Array.from(table.rows);
    let html = '';

    rows.forEach(row => {
      let visualCol = 1;
      const cells = Array.from(row.cells);
      for (const cell of cells) {
        const span = parseInt(cell.colSpan || 1);
        if (visualCol <= planetIndex && planetIndex < visualCol + span) {
          const clean = cell.innerHTML.replace(/<br\s*\/?>/gi, ' ');
          html += `<div style="margin: 1em 0; font-size: 1.4rem;">${clean}</div>`;
          break;
        }
        visualCol += span;
      }
    });

    planetariumContent.innerHTML = html;
    planetarium.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  overlay.addEventListener("click", () => {
    planetarium.style.display = "none";
    planetariumContent.innerHTML = '';
    document.body.style.overflow = "";
  });
});