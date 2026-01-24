
document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("modalOverlay");
  const contactBtn = document.getElementById("contactBtn");
  const closeModal = document.getElementById("closeModal");

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    requestAnimationFrame(() => {
      modalOverlay.classList.add("active");
    });
  });

  closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
    }
  });
});