const form = document.querySelector("form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const comments = document.querySelector("#comments");
const commentsError = document.querySelector("#commentsError");
const successMessage = document.querySelector("#successMessage");

function validateForm() {
  event.preventDefault();

  if (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(comments.value, 9) === true) {
    commentsError.style.display = "none";
  } else {
    commentsError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (
    checkLength(name.value, 0) === true &&
    checkLength(comments.value, 9) === true &&
    validateEmail(email.value) === true
  ) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
