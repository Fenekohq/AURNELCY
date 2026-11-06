(function () {
  const storageKey = 'aurnelcyLikesDislikes';
  const labels = { likes: 'chose aimée', dislikes: 'chose détestée' };
  const state = { likes: [], dislikes: [] };

  function isListKey(key) {
    return Object.prototype.hasOwnProperty.call(state, key);
  }

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (
        !parsed ||
        !Array.isArray(parsed.likes) ||
        !Array.isArray(parsed.dislikes) ||
        !parsed.likes.every((item) => typeof item === 'string') ||
        !parsed.dislikes.every((item) => typeof item === 'string')
      ) {
        throw new Error('Les données enregistrées ne sont pas valides.');
      }
      state.likes = parsed.likes;
      state.dislikes = parsed.dislikes;
    }
  } catch (error) {
    console.error('Impossible de charger la liste des choses aimées et détestées.', error);
  }

  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      console.error('Impossible d’enregistrer la liste des choses aimées et détestées.', error);
    }
  }

  function renderList(key) {
    document.querySelectorAll(`.likes-dislikes-list[data-list="${key}"]`).forEach((list) => {
      list.replaceChildren();

      state[key].forEach((value, index) => {
        const item = document.createElement('li');
        item.className = 'likes-dislikes-item';
        item.dataset.index = String(index);

        const input = document.createElement('input');
        input.type = 'text';
        input.value = value;
        input.placeholder = 'Écrire ici…';
        input.dataset.listInput = key;
        input.setAttribute('aria-label', `${labels[key]} ${index + 1}`);

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.dataset.listRemove = key;
        removeButton.textContent = 'Supprimer';
        removeButton.setAttribute('aria-label', `Supprimer cette ${labels[key]}`);

        item.append(input, removeButton);
        list.appendChild(item);
      });
    });

  }

  Object.keys(state).forEach(renderList);

  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-list-add]');
    if (addButton) {
      const key = addButton.dataset.listAdd;
      if (!isListKey(key)) return;

      state[key].push('');
      renderList(key);
      save();
      addButton
        .closest('.likes-dislikes')
        .querySelector(`.likes-dislikes-list[data-list="${key}"] li:last-child input`)
        .focus();
      return;
    }

    const removeButton = event.target.closest('[data-list-remove]');
    if (!removeButton) return;

    const key = removeButton.dataset.listRemove;
    const item = removeButton.closest('.likes-dislikes-item');
    if (!isListKey(key) || !item) return;

    state[key].splice(Number(item.dataset.index), 1);
    renderList(key);
    save();
  });

  document.addEventListener('input', (event) => {
    const input = event.target.closest('[data-list-input]');
    if (!input) return;

    const key = input.dataset.listInput;
    const item = input.closest('.likes-dislikes-item');
    if (!isListKey(key) || !item) return;

    const index = Number(item.dataset.index);
    state[key][index] = input.value;
    document
      .querySelectorAll(`[data-list-input="${key}"]`)
      .forEach((otherInput) => {
        const otherItem = otherInput.closest('.likes-dislikes-item');
        if (otherItem && Number(otherItem.dataset.index) === index && otherInput !== input) {
          otherInput.value = input.value;
        }
      });
    save();
  });
})();
