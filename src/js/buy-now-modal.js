(() => {
  const refs = {
    openModalHeaderBtn: document.querySelector('[buy-now-header-modal-open]'),
    openModalBtn: document.querySelector('[data-now-modal-open]'),
    closeModalBtn: document.querySelector('[data-now-modal-close]'),
    modal: document.querySelector('[data-now-modal]'),
    body: document.querySelector('[data-body]'),
  };

  refs.openModalHeaderBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
