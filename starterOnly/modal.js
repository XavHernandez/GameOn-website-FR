function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalButton = document.querySelector(".close");
const modalBackground = document.querySelector(".bground");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalBg.style.display = "block";
}

// close modal event
closeModalButton.addEventListener("click", closeModal);
modalBackground.addEventListener("click", closeModal);
function closeModal() {
  modalBg.style.display = "none";
}
