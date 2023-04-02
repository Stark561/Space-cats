const forms = document.querySelectorAll('[name*="form"]');
const modals = document.querySelectorAll('[data-modal]');

forms.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    modals.forEach(modal => {
      if (event.target.name.includes(modal.dataset.modal)) {
        modal.classList.toggle('is-hidden');
      }
    });
  });
});
