(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-orange-open]"),
    closeModalBtn: document.querySelector("[data-modal-orange-close]"),
    modal: document.querySelector("[data-modal-orange]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();