/*Vocabulary Popover*/

document.addEventListener('DOMContentLoaded', function () {
  if (typeof vocabularyData === 'undefined' || !vocabularyData.length) {
    console.error("ERREUR CRITIQUE : La variable 'vocabularyData' n'est pas définie ou est vide.");
    return;
  }

  const definitionMap = new Map();
  vocabularyData.forEach((item) => {
    definitionMap.set(item.term.toLowerCase(), {
      term: item.term,
      definition: item.definition,
      implication: item.implication,
      simplified: item.simplified,
      desc: item.desc,
      parent: item.parent,
      etymology: item.etymology,
      synonym: item.synonym,
      pronunce: item.pronunce,
      meme: item.meme,
      surnatural: item.surnatural,
      version: item.version,
      category: item.category,
    });

    if (item.version) {
      const versions = item.version
        .split(/,/)
        .map((v) => v.trim())
        .filter((v) => v);

      versions.forEach((version) => {
        const versionLower = version.toLowerCase();
        definitionMap.set(versionLower, {
          term: item.term,
          definition: item.definition,
          implication: item.implication,
          simplified: item.simplified,
          desc: item.desc,
          parent: item.parent,
          etymology: item.etymology,
          synonym: item.synonym,
          pronunce: item.pronunce,
          meme: item.meme,
          surnatural: item.surnatural,
          version: item.version,
          category: item.category,
          isVersion: true,
        });
      });
    }
  });

  const termsToSearch = Array.from(definitionMap.keys());
  termsToSearch.sort((a, b) => b.length - a.length);

  window.activePopovers = [];
  let isVocabActive = false;
  let hasLinksBeenInjected = false;

  function getDefinitionContent(termKey) {
    const data = definitionMap.get(termKey.toLowerCase());
    if (!data) return null;
    const processedDefinitionHtml = processNestedContent(data.definition, termsToSearch);
    const summary = processedDefinitionHtml.split(/[.!?]/)[0].trim();
    return {
      summary: summary + (data.definition.includes('.') ? '.' : ''),
      originalTerm: data.term,
      data: data,
    };
  }

  function processNestedContent(text, terms) {
    let processedText = text;

    terms.forEach((nestedLowerCaseTerm) => {
      const nestedData = definitionMap.get(nestedLowerCaseTerm);
      if (!nestedData) return;

      const escapedNestedTerm = nestedLowerCaseTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

      const accentPattern = 'a-zA-Z0-9àâäèéêëëìîïòôöùûüçñ';
      const regex = new RegExp(
        `(?![^<]*>)(?<![${accentPattern}])(${escapedNestedTerm})(?![${accentPattern}])`,
        'gi',
      );

      processedText = processedText.replace(regex, (match) => {
        const originalTermWithCorrectCase = nestedData.term || match;
        return `<span class="definition-link" data-term="${originalTermWithCorrectCase}">${match}</span>`;
      });
    });
    return processedText;
  }

  function setPopoverPosition(linkElement, popover) {
    popover.style.visibility = 'hidden';
    popover.style.opacity = '0';
    popover.style.display = 'block';

    requestAnimationFrame(() => {
      const linkRect = linkElement.getBoundingClientRect();
      const safetyMargin = 10;
      const screenWidth = window.innerWidth;

      let popoverWidth;
      if (screenWidth <= 480) {
        popoverWidth = Math.min(screenWidth - 2 * safetyMargin, 300);
      } else if (screenWidth <= 768) {
        popoverWidth = Math.min(screenWidth - 2 * safetyMargin, 450);
      } else {
        popoverWidth = Math.min(800, screenWidth - 2 * safetyMargin);
      }

      popover.style.width = popoverWidth + 'px';
      popover.style.maxWidth = popoverWidth + 'px';

      const popoverHeight = popover.offsetHeight;
      const popoverActualWidth = popover.offsetWidth;

      const linkCenterX = linkRect.left + linkRect.width / 2 + window.scrollX;
      const linkTopY = linkRect.top + window.scrollY;
      const linkBottomY = linkTopY + linkRect.height;

      let finalTop, finalLeft;
      let isRightAligned = false;

      let desiredLeft = linkCenterX - popoverActualWidth / 2;

      if (desiredLeft + popoverActualWidth > screenWidth - safetyMargin) {
        finalLeft = Math.max(safetyMargin, screenWidth - popoverActualWidth - safetyMargin);
        isRightAligned = true;
      } else if (desiredLeft < safetyMargin) {
        finalLeft = safetyMargin;
        isRightAligned = false;
      } else {
        finalLeft = desiredLeft;
        isRightAligned = false;
      }

      const desiredTop = linkTopY - popoverHeight - safetyMargin;
      const minScrollY = window.scrollY;
      const bottomSpace = window.innerHeight - linkRect.bottom;
      const topSpace = linkRect.top;

      if (topSpace >= popoverHeight + safetyMargin) {
        finalTop = desiredTop;
      } else if (bottomSpace >= popoverHeight + safetyMargin) {
        finalTop = linkBottomY + safetyMargin;
      } else {
        if (topSpace >= bottomSpace) {
          finalTop = Math.max(minScrollY, linkTopY - popoverHeight - safetyMargin);
        } else {
          finalTop = linkBottomY + safetyMargin;
        }
      }

      popover.style.top = `${finalTop}px`;
      popover.style.left = `${finalLeft}px`;
      popover.style.visibility = 'visible';

      popover.classList.toggle('popover-arrow-right', isRightAligned);
      popover.classList.toggle('popover-arrow-left', !isRightAligned);
    });
  }

  function walk(node) {
    const ignoreTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'BUTTON', 'A'];

    if (node.nodeType === 1 && node.classList && node.classList.contains('definition-link')) {
      return;
    }

    if (node.nodeType === 3) {
      if (node.parentNode && !ignoreTags.includes(node.parentNode.tagName)) {
        handleTextNode(node);
      }
    } else if (node.nodeType === 1 && !ignoreTags.includes(node.tagName)) {
      for (let i = 0; i < node.childNodes.length; i++) {
        walk(node.childNodes[i]);
      }
    }
  }

  function handleTextNode(textNode) {
    const originalText = textNode.nodeValue;
    let newHtml = originalText;
    let replaced = false;

    const isWithinTag = /<[^>]+>/.test(newHtml);
    if (isWithinTag) return;

    const escapedTerms = termsToSearch.map((term) => {
      return term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    });

    const alternationPattern = escapedTerms.join('|');

    const accentPattern = 'a-zA-Z0-9àâäèéêëëìîïòôöùûüçñ';
    const regex = new RegExp(
      `(?![^<]*>)(?<![${accentPattern}])(${alternationPattern})(?![${accentPattern}])`,
      'gi',
    );

    if (regex.test(newHtml)) {
      replaced = true;

      newHtml = newHtml.replace(regex, (match) => {
        const data = definitionMap.get(match.toLowerCase());
        if (!data) return match;

        const originalTermWithCorrectCase = data.term || match;
        return `<span class="definition-link" data-term="${originalTermWithCorrectCase}">${match}</span>`;
      });
    }

    if (replaced) {
      const newFragment = document.createElement('span');
      newFragment.innerHTML = newHtml;
      textNode.parentNode.replaceChild(newFragment, textNode);

      walk(newFragment);
    }
  }

  const toggleButton = document.getElementById('toggle-vocab-button');
  const vocabDetailsDropdown = document.getElementById('vocab-details-dropdown');

  if (!toggleButton) {
    console.error(
      "ERREUR : L'élément <button id='toggle-vocab-button'> est manquant dans le HTML.",
    );
    return;
  }

  document.addEventListener('click', function (event) {
    if (
      !event.target.closest('#toggle-vocab-button') &&
      !event.target.closest('#vocab-details-dropdown')
    ) {
      vocabDetailsDropdown.style.display = 'none';
    }
  });

  toggleButton.addEventListener('click', function (event) {
    event.stopPropagation();

    if (event.target === toggleButton || event.target.closest('button') === toggleButton) {
      vocabDetailsDropdown.style.display =
        vocabDetailsDropdown.style.display === 'none' ? 'block' : 'none';
    }

    if (!hasLinksBeenInjected) {
      console.log('Activation initiale : Injection des liens dans le DOM.');
      walk(document.body);
      hasLinksBeenInjected = true;
    }

    isVocabActive = !isVocabActive;

    toggleButton.classList.toggle('is-active', isVocabActive);
    document.body.classList.toggle('vocab-feature-active', isVocabActive);

    if (!isVocabActive) {
      window.activePopovers.forEach((popover) => {
        popover.remove();
      });
      window.activePopovers = [];
      vocabDetailsDropdown.style.display = 'none';
    }
  });

  document.body.addEventListener('click', function (event) {
    if (!isVocabActive) return;

    const target = event.target;
    const linkElement = target.closest('.definition-link');
    const closeButton = target.closest('.popover-close');

    if (closeButton) {
      const popover = closeButton.closest('.definition-popover');
      if (popover) {
        popover.remove();
        window.activePopovers = window.activePopovers.filter((p) => p !== popover);
      }
      return;
    }

    if (linkElement) {
      event.stopPropagation();

      const term = linkElement.getAttribute('data-term');
      if (!term) return;

      let existingPopover = window.activePopovers.find((p) => p.dataset.term === term);

      if (existingPopover) {
        existingPopover.remove();
        window.activePopovers = window.activePopovers.filter((p) => p !== existingPopover);
        return;
      }

      const content = getDefinitionContent(term);
      if (!content) return;

      const popover = document.createElement('div');
      popover.className = 'definition-popover';
      popover.dataset.term = term;

      let popoverHTML = `
                <span class="popover-close">×</span>
                <strong>${content.originalTerm}</strong>
                <p style="font-size: 0.8em; margin-top: 5px;">${content.summary}</p>
            `;

      if (content.data.implication) {
        popoverHTML += `<div data-detail-type="implication" style="margin-top: 8px; font-size: 0.85em;"><em>⇒ ${content.data.implication}</em></div>`;
      }
      if (content.data.simplified) {
        popoverHTML += `<div data-detail-type="simplified" style="margin-top: 8px; font-size: 0.85em;"><em>👌 ${content.data.simplified}</em></div>`;
      }
      if (content.data.desc) {
        popoverHTML += `<div data-detail-type="desc" style="margin-top: 8px; font-size: 0.85em;"><em>🖼️ ${content.data.desc}</em></div>`;
      }
      if (content.data.parent) {
        popoverHTML += `<div data-detail-type="parent" style="margin-top: 8px; font-size: 0.85em;"><em># ${content.data.parent}</em></div>`;
      }
      if (content.data.etymology) {
        popoverHTML += `<div data-detail-type="etymology" style="margin-top: 8px; font-size: 0.85em;"><em>ⓘ ${content.data.etymology}</em></div>`;
      }
      if (content.data.synonym) {
        popoverHTML += `<div data-detail-type="synonym" style="margin-top: 8px; font-size: 0.85em;"><em>≈ ${content.data.synonym}</em></div>`;
      }
      if (content.data.pronunce) {
        popoverHTML += `<div data-detail-type="pronunce" style="margin-top: 8px; font-size: 0.85em;"><em>🗣 ${content.data.pronunce}</em></div>`;
      }
      if (content.data.meme) {
        popoverHTML += `<div data-detail-type="meme" style="margin-top: 8px; font-size: 0.85em;"><em>🗿 ${content.data.meme}</em></div>`;
      }
      if (content.data.surnatural) {
        popoverHTML += `<div data-detail-type="surnatural" style="margin-top: 8px; font-size: 0.85em;"><em>🔮 ${content.data.surnatural}</em></div>`;
      }
      if (content.data.version) {
        popoverHTML += `<div data-detail-type="version" style="margin-top: 8px; font-size: 0.85em;"><em>≍ ${content.data.version}</em></div>`;
      }

      popover.innerHTML = popoverHTML;

      document.body.appendChild(popover);
      if (window.detailVisibility && typeof window.detailVisibility.update === 'function') {
        window.detailVisibility.update();
      }

      setTimeout(() => {
        setPopoverPosition(linkElement, popover);
        popover.classList.add('is-active');
      }, 0);

      window.activePopovers.push(popover);
      if (window.detailVisibility && typeof window.detailVisibility.update === 'function') {
        window.detailVisibility.update();
      }
    } else {
      if (target.closest('.definition-popover')) {
        return;
      }

      window.activePopovers.forEach((popover) => {
        popover.remove();
      });
      window.activePopovers = [];
    }
  });

  window.addEventListener('scroll', () => {
    if (!isVocabActive) return;

    window.activePopovers.forEach((popover) => {
      const term = popover.dataset.term;
      const originalLink = document.querySelector(`.definition-link[data-term="${term}"]`);
      if (originalLink) {
        setPopoverPosition(originalLink, popover);
      }
    });
  });
});
