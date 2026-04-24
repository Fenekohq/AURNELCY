const arti1 = document.getElementById('arti1');
const arti11 = document.getElementById('arti11');
const copy = arti1.cloneNode(true);
arti11.appendChild(copy);

const arti2 = document.getElementById('arti2');
const arti22 = document.getElementById('arti22');
const copy2 = arti2.cloneNode(true);
arti22.appendChild(copy2);

const arti3 = document.getElementById('arti3');
const arti33 = document.getElementById('arti33');
const copy3 = arti3.cloneNode(true);
arti33.appendChild(copy3);

const arti4 = document.getElementById('arti4');
document.getElementById('arti44a').appendChild(arti4.cloneNode(true));
document.getElementById('arti44b').appendChild(arti4.cloneNode(true));

const arti5 = document.getElementById('arti5');
const arti55 = document.getElementById('arti55');
const copy5 = arti5.cloneNode(true);
arti55.appendChild(copy5);

const arti6 = document.getElementById('arti6');
const arti66 = document.getElementById('arti66');
const copy6 = arti6.cloneNode(true);
arti66.appendChild(copy6);

const ktn1 = document.getElementById('ktn1');
const ktn11 = document.getElementById('ktn11');
const copy12 = ktn1.cloneNode(true);
ktn11.appendChild(copy12);

const cale1 = document.getElementById('cale1');
const cale11 = document.getElementById('cale11');
const copy7 = cale1.cloneNode(true);
cale11.appendChild(copy7);

const cale2 = document.getElementById('cale2');
const cale22 = document.getElementById('cale22');
const copy8 = cale2.cloneNode(true);
cale22.appendChild(copy8);

const matr5 = document.getElementById('matr5');
const matr55 = document.getElementById('matr55');
const copy9 = matr5.cloneNode(true);
matr55.appendChild(copy9);

const matr6 = document.getElementById('matr6');
const matr66 = document.getElementById('matr66');
const copy10 = matr6.cloneNode(true);
matr66.appendChild(copy10);

const matr7 = document.getElementById('matr7');
const matr77 = document.getElementById('matr77');
const copy11 = matr7.cloneNode(true);
matr77.appendChild(copy11);

const capsuleIds = ['arti11', 'arti22', 'arti33', 'arti44b', 'arti55', 'arti66', 'ktn11', 'cale11', 'cale22', 'matr55', 'matr66', 'matr77'];
const iconsContainer = document.getElementById('capsule-icons');
const modals = {};

capsuleIds.forEach(id => {
  const element = document.getElementById(id);
  if (!element) return;

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
  tableContainers.forEach(container => {
    const newStyle = container.getAttribute('style')
      .replace(/overflow-x:\s*auto;?/g, '')
      .replace(/>\s*-webkit-overflow-scrolling:\s*touch;?/g, '');
    if (newStyle.trim()) {
      container.setAttribute('style', newStyle);
    } else {
      container.removeAttribute('style');
    }
  });

  const titleDecorations = tempDiv.querySelectorAll('div[style*="font-size"]');
  titleDecorations.forEach(titleDiv => {
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
  measureContainer.style.cssText = 'position:fixed;top:-9999px;left:-9999px;visibility:hidden;pointer-events:none;width:auto;height:auto;';
  measureContainer.innerHTML = contentHTML;
  document.body.appendChild(measureContainer);

  const contentWidth = measureContainer.scrollWidth;
  const contentHeight = measureContainer.scrollHeight;
  document.body.removeChild(measureContainer);

  const maxWidth = 180;
  const maxHeight = 180;
  const zoomX = maxWidth / contentWidth;
  const zoomY = maxHeight / contentHeight;
  const adaptiveZoom = Math.min(zoomX, zoomY); // Fill to touch one edge

  contentDiv.style.transform = `scale(${adaptiveZoom})`;
  contentDiv.style.transformOrigin = 'center';

  const modal = document.createElement('div');
  modal.className = 'capsule-modal';
  modal.dataset.id = id;
  const fullContent = element.cloneNode(true);
  fullContent.style.display = 'block';
  modal.innerHTML = `
      <div class="capsule-modal-content">
        <button class="capsule-modal-close">✕</button>
        <h2 style="margin-top: 0; text-align: center;">${title}</h2>
        ${fullContent.innerHTML}
      </div>
    `;

  document.body.appendChild(modal);
  modals[id] = modal;

  containerDiv.addEventListener('click', () => {
    modal.classList.add('active');
  });

  const closeBtn = modal.querySelector('.capsule-modal-close');
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  iconsContainer.appendChild(containerDiv);
});