const conceptMapConfigs = [
  { id: 'map0k', sourceTitle: 'Carte Conceptuelle de 0K' },
  { id: 'mapMapnel', sourceTitle: 'Carte Conceptuelle de Mapnel' },
  { id: 'mapIUVALCY', sourceTitle: "Carte Conceptuelle d'IUVALCY" },
  { id: 'mapARCADIA', sourceTitle: "Carte Conceptuelle d'ARcdiA" },
  { id: 'mapAURSYL', sourceTitle: "Carte Conceptuelle d'Aursyl" },
  { id: 'mapLYSRUA', sourceTitle: 'Carte Conceptuelle de Lysrua' },
  { id: 'mapARTICULATIONS', sourceTitle: 'Carte Conceptuelle des Articulations' },
];

function normalizeConceptMapLabel(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function findConceptMapSource(title) {
  const normalizedTitle = normalizeConceptMapLabel(title);
  const headings = document.querySelectorAll('h2');

  for (const heading of headings) {
    if (normalizeConceptMapLabel(heading.textContent) !== normalizedTitle) continue;

    let sibling = heading.nextElementSibling;
    while (sibling) {
      if (sibling.classList.contains('mermaid')) {
        return sibling;
      }
      sibling = sibling.nextElementSibling;
    }
  }

  return null;
}

function createPreviewContent(contentHTML) {
  const contentDiv = document.createElement('div');
  contentDiv.className = 'conceptmap-preview-content';
  contentDiv.innerHTML = contentHTML;

  const measureContainer = document.createElement('div');
  measureContainer.style.cssText =
    'position:fixed;top:-9999px;left:-9999px;visibility:hidden;pointer-events:none;width:auto;height:auto;';
  measureContainer.innerHTML = contentHTML;
  document.body.appendChild(measureContainer);

  const contentWidth = measureContainer.scrollWidth || 1;
  const contentHeight = measureContainer.scrollHeight || 1;
  document.body.removeChild(measureContainer);

  const maxWidth = 180;
  const maxHeight = 180;
  const adaptiveZoom = Math.min(maxWidth / contentWidth, maxHeight / contentHeight, 1);

  contentDiv.style.transform = `scale(${adaptiveZoom})`;
  contentDiv.style.transformOrigin = 'center';

  return contentDiv;
}

function createConceptMapModal(id, title, contentHTML) {
  const modal = document.createElement('div');
  modal.className = 'conceptmap-modal';
  modal.dataset.id = id;
  modal.innerHTML = `
    <div class="conceptmap-modal-content">
      <button class="conceptmap-modal-close" aria-label="Fermer">&times;</button>
      <h2 style="margin-top: 0; text-align: center;">${title}</h2>
      ${contentHTML}
    </div>
  `;

  const closeBtn = modal.querySelector('.conceptmap-modal-close');
  closeBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.body.appendChild(modal);
  return modal;
}

function initializeConceptMaps() {
  const iconsContainer = document.getElementById('conceptmap-icons');
  if (!iconsContainer || iconsContainer.dataset.initialized === 'true') return;

  iconsContainer.innerHTML = '';

  conceptMapConfigs.forEach(({ id, sourceTitle }) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const sourceElement = findConceptMapSource(sourceTitle);
    targetElement.innerHTML = '';

    if (sourceElement) {
      targetElement.appendChild(sourceElement.cloneNode(true));
    }

    const title = targetElement.getAttribute('data-title') || id;
    const contentHTML = targetElement.innerHTML;

    const containerDiv = document.createElement('div');
    containerDiv.className = 'conceptmap-preview-container';
    containerDiv.innerHTML = `
      <div class="conceptmap-preview"></div>
      <div class="conceptmap-title">${title}</div>
    `;

    const previewElement = containerDiv.querySelector('.conceptmap-preview');
    previewElement.appendChild(createPreviewContent(contentHTML));

    const modal = createConceptMapModal(id, title, contentHTML);
    containerDiv.addEventListener('click', () => {
      modal.classList.add('active');
    });

    iconsContainer.appendChild(containerDiv);
  });

  iconsContainer.dataset.initialized = 'true';
}

window.addEventListener('load', initializeConceptMaps);
