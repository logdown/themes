(function enableLagacyCategorySelect() {
  if (typeof document.querySelector == "undefined" || document.querySelector == null) return false;

  var categorySelect = document.querySelector('#category-select');

  if (typeof categorySelect == "undefined" || categorySelect == null) return false;

  for (var i = 0; i < categorySelect.length; i++) {
    if (location.pathname == categorySelect[i].value) {
      categorySelect.value = categorySelect[i].value
    }
  }

  categorySelect.addEventListener('change', function(event) {
    location.href = this.value;
  });
})();

(function enableCategoryDropdown() {
  if (typeof document.querySelector == "undefined" || document.querySelector == null) return false;

  var categorySelect = document.querySelector('.category-dropdown'),
      dropdownToggle = categorySelect.querySelector('[role=button]'),
      dropdownMenu = categorySelect.querySelector('[role=menu]');

  if (typeof dropdownMenu == "undefined" || dropdownMenu == null) return false;

  dropdownMenu.classList.add('hidden');

  setTimeout(function() {
    dropdownMenu.classList.add('fade');
  },50)

  dropdownToggle.addEventListener('click', function(event) {
    dropdownMenu.classList.toggle('hidden');
    event.preventDefault();
  });
})();
