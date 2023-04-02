const refs = {
  modals: [...document.querySelectorAll('[data-modal]')],
  openBtns: document.querySelectorAll('[data-modal-open]'),
  closeBtns: document.querySelectorAll('[data-modal-close]'),
  form: document.querySelector('[name="order-form"]'),
};

refs.openBtns.forEach(openBtn =>
  openBtn.addEventListener('click', toggleModal)
);
refs.closeBtns.forEach(closeBtn =>
  closeBtn.addEventListener('click', toggleModal)
);

function toggleModal(event) {
  const { dataset } = event.currentTarget;
  const values = Object.values({ ...dataset });
  refs.modals.map(modalEl => {
    if (modalEl.dataset.modal === values[0]) {
      modalEl.classList.toggle('is-hidden');
    }
  });
}
