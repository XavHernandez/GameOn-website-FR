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
const regexName = /^[a-zA-Z ]+$/;
const regexMail = /^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/;

// Validation des Inputs
// FirstName
const firstName = document.getElementById("first");
const firstNameError = document.getElementById("erreurName");

firstName.addEventListener("blur", function () {
  if (!regexName.test(firstName.value.trim())) {
    firstNameError.innerText = "Votre prénom comporte des symboles invalides !";
    firstName.style.border = "2px solid red";
  } else if (firstName.value.trim().length < 2) {
    firstNameError.innerText =
      "Votre prénom doit comporter au moins 2 caractères valides !";
    firstName.style.border = "2px solid red";
  } else if (
    regexName.test(firstName.value.trim()) &&
    firstName.value.trim().length >= 2
  ) {
    firstNameError.innerText = "";
    firstName.style.border = "2px solid green";
  }
});

// LastName
const lastName = document.getElementById("last");
const lastNameError = document.getElementById("erreurLastName");

lastName.addEventListener("blur", function () {
  if (!regexName.test(lastName.value.trim())) {
    lastNameError.innerText = "Votre nom comporte des symboles invalides !";
    lastName.style.border = "2px solid red";
  } else if (lastName.value.trim().length < 2) {
    lastNameError.innerText =
      "Votre nom doit comporter au moins 2 caractères valides !";
    lastName.style.border = "2px solid red";
  } else if (
    regexName.test(lastName.value.trim()) &&
    lastName.value.trim().length >= 2
  ) {
    lastNameError.innerText = "";
    lastName.style.border = "2px solid green";
  }
});

// Email
const email = document.getElementById("email");
const emailError = document.getElementById("erreurMail");

email.addEventListener("blur", function () {
  if (!regexMail.test(email.value.trim())) {
    emailError.innerText = "Veuillez entrer une adresse mail valide !";
    email.style.border = "2px solid red";
  } else if (regexMail.test(email.value.trim())) {
    emailError.innerText = "";
    email.style.border = "2px solid green";
  }
});

// BirthDate
const birthDate = document.getElementById("birthdate");
const birthDateError = document.getElementById("erreurBirth");

birthDate.addEventListener("blur", function () {
  if (!birthDate.value) {
    birthDateError.innerText = "Veuillez entrer une date !";
    birthDate.style.border = "2px solid red";
  } else if (birthDate.value) {
    birthDateError.innerText = "";
    birthDate.style.border = "2px solid green";
  }
});

// Quantity
const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("error-quantity");

quantity.addEventListener("blur", function () {
  if (quantity.value < 0 || quantity.value > 500) {
    quantityError.innerText = "Veuillez entrer un chiffre valide";
    quantity.style.border = "2px solid red";
  } else {
    quantityError.innerText = "";
    quantity.style.border = "2px solid green";
  }
});

// OnSubmit Validations
const globalError = document.getElementById("erreur");
const modalBody = document.getElementById("modalClose");
const formClose = document.getElementById("formClose");
const validationModal = document.getElementById("content-validated");
const locations = form["location"];
const checkbox = form["checkbox"];

form.addEventListener("submit", function (event) {
  let formIsValid = true;
  let errorMessage = "";

  if (Array.from(locations).some((location) => location.checked) === false) {
    errorMessage = "Veuillez sélectionner une ville !";
    formIsValid = false;
  }

  if (!checkbox.checked) {
    errorMessage = "Veuillez acceptez les conditions de vente !";
    formIsValid = false;
  }

  Array.from(form).forEach((input) => {
    if (!input.value) {
      errorMessage = "Veuillez compléter le formulaire !";
      formIsValid = false;
    }
  });

  if (!formIsValid) {
    event.preventDefault();
    globalError.innerText = errorMessage;
    return false;
  } else {
    event.preventDefault();
    modalBody.style.display = "none";
    formClose.style.display = "none";
    validationModal.style.display = "flex";
    return true;
  }
});

// Form Submission
submitBtn.addEventListener("click", () => form.submit());
