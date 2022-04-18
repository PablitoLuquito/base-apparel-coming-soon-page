function showMessage(input, message, type) {
  const errorIcon = input.parentNode.querySelector("#error-icon");
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
  errorIcon.style.visibility = "initial";
  input.className = type ? "success" : "error";
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, "", true);
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg, errorIcon) {
  if (!hasValue(input, requiredMsg, errorIcon)) {
    return false;
  }

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg, errorIcon);
  }
  return true;
}

const form = document.querySelector("#email-submit");
const errorIcon = document.querySelector("#error-icon");
const msg = document.querySelector("small");
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please provide a valid email";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let emailValid = validateEmail(
    form.elements["email"],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );
  if (emailValid) {
    errorIcon.style.visibility = "hidden";
    msg.innerText = "Email successfully subscribed";
  }
});
