function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector("small");
  const email = input.parentNode.querySelector("input");
  const errorIcon = input.parentNode.querySelector("img");
  msg.innerText = message;
  email.style.borderColor = "hsl(0, 93%, 68%)";
  errorIcon.style.visibility = "visible";

  input.className = type ? "success" : "error";
  return type;
}

function showError(input, message) {
  const msg = input.parentNode.querySelector("small");
  msg.style.color = "hsl(0, 93%, 68%)";
  return showMessage(input, message, false);
}

function showSuccess(input, message) {
  const msg = input.parentNode.querySelector("small");
  msg.style.color = "#66ff33";
  return showMessage(input, message, true);
}

function hasValue(input, message) {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, hideIcon, requiredMsg, invalidMsg, validMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return showSuccess(input, validMsg);
}

const form = document.querySelector("#submitemail");

const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please provide a valid email";
const EMAIL_VALID = "Email subscribed successfully";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let emailValid = validateEmail(
    form.elements["email"],
    form.elements["img"],
    EMAIL_REQUIRED,
    EMAIL_INVALID,
    EMAIL_VALID
  );

  if (emailValid) {
    email.style.borderColor = "#66ff33";
    img.style.visibility = "hidden";
  }
});
