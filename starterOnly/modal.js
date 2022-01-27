function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalButton = document.querySelector(".close");
const modalBackground = document.querySelector(".bground");
const modal = document.querySelector(".content");

// Open Modal Event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalBackground.style.display = "block";
}

// Close Modal Event
closeModalButton.addEventListener("click", closeModal);
modalBackground.addEventListener("click", closeModal);
function closeModal(e) {
  if (e.target.contains(closeModalButton)) {
    modalBackground.style.display = "none";
  }
}
