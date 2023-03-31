(() => {
    const refs = {
      openModalBtn: document.querySelector("[review-modal-open]"),
      closeModalBtn: document.querySelector("[review-modal-close]"),
      modal: document.querySelector("[review-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();