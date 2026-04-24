//Word Counter

function countWordsInSection(sectionId, untilClass = null) {
  const sectionHeader = document.getElementById(sectionId);
  if (!sectionHeader) return 0;

  const mainHeadings = Array.from(document.querySelectorAll('h1.theorem'));
  const currentIndex = mainHeadings.findIndex(h => h.id === sectionId);
  const nextHeading = currentIndex !== -1 && currentIndex < mainHeadings.length - 1
    ? mainHeadings[currentIndex + 1]
    : null;

  let wordCount = 0;

  let started = false;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);

  let node;
  while ((node = walker.nextNode())) {
    if (!started) {
      if (sectionHeader.contains(node)) started = true;
      continue;
    }

    if (nextHeading && nextHeading.contains(node)) break;
    if (mainHeadings.some(h => h !== sectionHeader && h.contains(node))) break;

    let el = node.parentElement;
    let skip = false;
    while (el && el !== document.body) {
      if (el.classList.contains('lyrics-section') || el.classList.contains('excluded-section')) {
        skip = true;
        break;
      }
      if (untilClass && el.classList.contains(untilClass)) { return wordCount; }
      el = el.parentElement;
    }
    if (skip) continue;

    const words = node.textContent.trim().split(/\s+/).filter(w => w.length > 0);
    wordCount += words.length;
  }

  return wordCount;
}

function updateWordCountTable() {
  const sectionConfigs = [
    { id: 'Mapnel', displayName: 'Mapnel' },
    { id: 'IUVALCY', displayName: 'IUVALCY' },
    { id: 'ARc⟁diA', displayName: 'ARc⟁diA' },
    { id: 'Aursyl', displayName: 'Aursyl' },
    { id: 'Lysrua', displayName: 'Lysrua' },
    { id: 'DOMINO_s', displayName: 'D⦾MIN⦿\'s', untilClass: 'thx' }
  ];

  const wordCounts = {};
  let totalWords = 0;

  sectionConfigs.forEach(section => {
    const count = countWordsInSection(section.id, section.untilClass);
    wordCounts[section.displayName] = count;
    totalWords += count;
  });

  wordCounts['⟁URNELCY'] = totalWords;

  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const firstCell = row.querySelector('th, td');
      if (firstCell && firstCell.textContent.trim() === 'Mots') {
        const headerRow = table.querySelector('tbody tr');
        const headers = Array.from(headerRow.querySelectorAll('td')).map(td => td.textContent.trim());

        const cells = row.querySelectorAll('td');
        for (let i = 0; i < headers.length; i++) {
          const headerName = headers[i];
          if (wordCounts[headerName] !== undefined && cells[i]) {
            cells[i].textContent = wordCounts[headerName];
          }
        }
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateWordCountTable);
} else {
  updateWordCountTable();
}

setTimeout(updateWordCountTable, 100);

//Definition Counter

function updateDefinitionCount() {
  if (typeof vocabularyData !== 'undefined') {
    const count = vocabularyData.length;
    const counterElement = document.getElementById('definitionCount');

    if (counterElement) {
      counterElement.textContent = count;
    }
  }
}

updateDefinitionCount();

//Summary Counter

function updateCounters() {
  const categories = document.querySelectorAll('#category-container > div');

  categories.forEach(cat => {
    const titleSpan = cat.querySelector('.category-title');
    const count = cat.querySelectorAll('.nav-button-2').length;

    if (titleSpan) {
      titleSpan.textContent = titleSpan.textContent.replace(/\(.*\)/, `(${count})`);
    }
  });
}

window.onload = updateCounters;