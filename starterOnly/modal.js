// Nav Menu Handler
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
const submitBtn = document.querySelector(".btn-submit");
const closeBtn = document.querySelector(".close");
const form = document.forms["reserve"];
const formData = document.querySelectorAll(".formData");
const modal = document.querySelector(".content");
const modalBackground = document.querySelector(".bground");

// Open Modal Event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalBackground.style.display = "block";
}

// Close Modal Event
closeBtn.addEventListener("click", closeModal);
modalBackground.addEventListener("click", closeModal);
function closeModal(e) {
  if (e.target.contains(closeBtn)) {
    modalBackground.style.display = "none";
  }
}

// Validation RegEx
const regexName = /^[a-zA-Z0-9éè^]{2,}$/;
const regexMail = /^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/;
const regexQuantity = /^[0-9]$/;

// Form Submission
submitBtn.addEventListener("click", () => form.submit());
