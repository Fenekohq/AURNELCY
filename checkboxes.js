document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown-detail-toggle');
  const dropdownToggleAll = document.getElementById('dropdown-toggle-all-check');
  const nomenclatureToggles = document.querySelectorAll('.detail-toggle[value]');
  const nomenclatureToggleAll = document.getElementById('toggle-all-check');

  function updateToggleAllCheckboxes() {
    const allDropdownChecked = Array.from(dropdownToggles).every(cb => cb.checked);
    dropdownToggleAll.checked = allDropdownChecked;

    const allNomenclatureChecked = Array.from(nomenclatureToggles).every(cb => cb.checked);
    nomenclatureToggleAll.checked = allNomenclatureChecked;
  }

  dropdownToggles.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      window.detailVisibility.set(this.value, this.checked);
      const nomenclatureCheckbox = document.getElementById(this.id.replace('dropdown-', ''));
      if (nomenclatureCheckbox) {
        nomenclatureCheckbox.checked = this.checked;
      }
      updateToggleAllCheckboxes();
    });
  });

  dropdownToggleAll.addEventListener('change', function () {
    window.detailVisibility.setAll(this.checked);
    dropdownToggles.forEach(cb => {
      cb.checked = this.checked;
    });
    nomenclatureToggles.forEach(cb => {
      cb.checked = this.checked;
    });
    nomenclatureToggleAll.checked = this.checked;
  });

  nomenclatureToggles.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      window.detailVisibility.set(this.value, this.checked);
      const dropdownCheckbox = document.getElementById('dropdown-' + this.id);
      if (dropdownCheckbox) {
        dropdownCheckbox.checked = this.checked;
      }
      updateToggleAllCheckboxes();
    });
  });

  nomenclatureToggleAll.addEventListener('change', function () {
    window.detailVisibility.setAll(this.checked);
    nomenclatureToggles.forEach(cb => {
      cb.checked = this.checked;
    });
    dropdownToggles.forEach(cb => {
      cb.checked = this.checked;
    });
    dropdownToggleAll.checked = this.checked;
  });

  updateToggleAllCheckboxes();
});