window.addEventListener('load', function () {
  function appendClone(sourceId, targetId) {
    const source = document.getElementById(sourceId);
    const target = document.getElementById(targetId);
    if (!source || !target) return;

    target.innerHTML = '';
    target.appendChild(source.cloneNode(true));
  }

  function createAlienMatrixClone() {
    const source = document.getElementById('matr4');
    const target = document.getElementById('matr44');
    if (!source || !target) return;

    const clone = source.cloneNode(true);

    clone.querySelectorAll('[id]').forEach((element) => {
      element.removeAttribute('id');
    });

    clone.querySelectorAll('[onclick]').forEach((element) => {
      element.removeAttribute('onclick');
    });

    clone.querySelectorAll('button').forEach((button) => {
      button.disabled = true;
      button.style.opacity = '0.7';
      button.style.cursor = 'default';
    });

    clone.querySelectorAll('input').forEach((input) => {
      input.disabled = true;
      input.tabIndex = -1;
      input.style.cursor = 'default';
    });

    target.innerHTML = '';
    target.appendChild(clone);
  }

  function createInteractiveAlienMatrixModalBody() {
    const source = document.getElementById('matr4');
    if (!source) return null;

    const clone = source.cloneNode(true);

    clone.querySelectorAll('[id]').forEach((element) => {
      element.removeAttribute('id');
    });

    clone.querySelectorAll('[onclick]').forEach((element) => {
      element.removeAttribute('onclick');
    });

    clone.querySelectorAll('[data-cw-root]').forEach((element) => {
      element.removeAttribute('data-cw-initialized');
    });

    return clone;
  }

  appendClone('arti0', 'arti00');
  appendClone('arti1', 'arti11');
  appendClone('arti2', 'arti22');
  appendClone('arti3', 'arti33');

  const arti4 = document.getElementById('arti4');
  if (arti4) {
    const arti44a = document.getElementById('arti44a');
    const arti44b = document.getElementById('arti44b');
    if (arti44a) {
      arti44a.innerHTML = '';
      arti44a.appendChild(arti4.cloneNode(true));
    }
    if (arti44b) {
      arti44b.innerHTML = '';
      arti44b.appendChild(arti4.cloneNode(true));
    }
  }

  appendClone('arti5', 'arti55');
  appendClone('arti6', 'arti66');
  appendClone('ktn1', 'ktn11');
  appendClone('cale1', 'cale11');
  appendClone('cale2', 'cale22');
  appendClone('matr5', 'matr55');
  createAlienMatrixClone();
  appendClone('matr6', 'matr66');

  const capsuleIds = [
    'arti00',
    'arti11',
    'arti22',
    'arti33',
    'arti44b',
    'arti55',
    'arti66',
    'ktn11',
    'cale11',
    'cale22',
    'matr55',
    'matr44',
    'matr66',
  ];
  const iconsContainer = document.getElementById('capsule-icons');
  const modals = {};

  capsuleIds.forEach((id) => {
    const element = document.getElementById(id);
    if (!element || !iconsContainer) return;

    const title = element.getAttribute('data-title') || id;

    const containerDiv = document.createElement('div');
    containerDiv.className = 'capsule-preview-container';
    containerDiv.innerHTML = `
      <div class="capsule-preview"></div>
      <div class="capsule-title">${title}</div>
    `;

    const previewElement = containerDiv.querySelector('.capsule-preview');

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = element.innerHTML;

    const subjectDetails = tempDiv.querySelector('details.info');
    if (subjectDetails) {
      subjectDetails.remove();
    }

    const tableContainers = tempDiv.querySelectorAll('div[style*="overflow-x"]');
    tableContainers.forEach((container) => {
      const currentStyle = container.getAttribute('style') || '';
      const newStyle = currentStyle
        .replace(/overflow-x:\s*auto;?/g, '')
        .replace(/-webkit-overflow-scrolling:\s*touch;?/g, '');

      if (newStyle.trim()) {
        container.setAttribute('style', newStyle);
      } else {
        container.removeAttribute('style');
      }
    });

    const titleDecorations = tempDiv.querySelectorAll('div[style*="font-size"]');
    titleDecorations.forEach((titleDiv) => {
      if (titleDiv.textContent.includes('⌂') || titleDiv.textContent.includes('{')) {
        titleDiv.remove();
      }
    });

    const contentHTML = tempDiv.innerHTML;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'capsule-preview-content';
    contentDiv.innerHTML = contentHTML;
    previewElement.appendChild(contentDiv);

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
    const adaptiveZoom = Math.min(maxWidth / contentWidth, maxHeight / contentHeight);

    contentDiv.style.transform = `scale(${adaptiveZoom})`;
    contentDiv.style.transformOrigin = 'center';

    const modal = document.createElement('div');
    modal.className = 'capsule-modal';
    modal.dataset.id = id;

    const modalContent = document.createElement('div');
    modalContent.className = 'capsule-modal-content';

    const closeButton = document.createElement('button');
    closeButton.className = 'capsule-modal-close';
    closeButton.setAttribute('aria-label', 'Fermer');
    closeButton.innerHTML = '&times;';

    const heading = document.createElement('h2');
    heading.style.marginTop = '0';
    heading.style.textAlign = 'center';
    heading.textContent = title;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(heading);

    if (id === 'matr44') {
      const interactiveBody = createInteractiveAlienMatrixModalBody();
      if (interactiveBody) {
        modalContent.appendChild(interactiveBody);
      } else {
        const fallback = document.createElement('div');
        fallback.innerHTML = element.innerHTML;
        modalContent.appendChild(fallback);
      }
    } else {
      const body = document.createElement('div');
      body.innerHTML = element.innerHTML;
      modalContent.appendChild(body);
    }

    modal.appendChild(modalContent);

    document.body.appendChild(modal);
    modals[id] = modal;

    if (id === 'matr44' && typeof window.initialize4lienCrossword === 'function') {
      window.initialize4lienCrossword(modalContent);
    }

    containerDiv.addEventListener('click', () => {
      modal.classList.add('active');
    });

    const closeBtn = modal.querySelector('.capsule-modal-close');
    closeBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('active');
      }
    });

    iconsContainer.appendChild(containerDiv);
  });
});
