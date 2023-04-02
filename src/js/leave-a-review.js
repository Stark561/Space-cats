const refs = {
    openModalBtn: document.querySelector('[review-modal-open]'),
    closeModalBtn: document.querySelector('[review-modal-close]'),
    modal: document.querySelector('[review-modal]'),
    body: document.querySelector('[data-body]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    e.preventDefault()
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
