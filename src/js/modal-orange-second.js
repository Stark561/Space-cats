(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-orange-second-open]"),
    closeModalBtn: document.querySelector("[data-modal-orange-second-close]"),
    modal: document.querySelector("[data-modal-second-orange]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();