var openModal = document.querySelector('.btn');
var modalPopup = document.querySelector('.modal');
var modalClose = modalPopup.querySelector('.modal--closed');
var overlay = document.querySelector(".overlay");

modalPopup.classList.remove('modal--nojs');

openModal.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.toggle("modal-overlay");
  modalPopup.classList.toggle("modal--closed");
});

overlay.addEventListener("click", function(event) {
  if(overlay.classList.contains("modal-overlay")) {
    event.preventDefault();
    overlay.classList.remove("modal-overlay");
    modalPopup.classList.add("modal--closed");
  }
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode === 27) {
    if(!modalPopup.classList.contains("modal--closed") && overlay.classList.contains("modal-overlay")) {
      event.preventDefault();
      modalPopup.classList.add("modal--closed");
      overlay.classList.remove("modal-overlay");
    }
  }
});
