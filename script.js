const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement; // take formControl->input-field
  formControl.className = "form-control error"; // add the error class
  const small = formControl.querySelector("small"); // take formControl->small-tag
  small.innerText = message; // change the innerText to showError->message
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement; // take formControl->input-field
  formControl.className = "form-control success"; // add the success class
}

// Check password is valid
// function isValidEmail(email) {
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) { // for each input value execute function
    if (input.value.trim() === "") {
      showError(input, `correct ${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) { // if length of the username < than min
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) { // if length of the username > than max
    showError(input, `${getFieldName(input)} must be no more than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not mutch');
  }
}

// Get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1); // convert first letter to upperCase
}

// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);

  // if (username.value === "") { // if input-field has no value
  //   showError(username, "Username is required"); // showError->message
  // } else { // if input-field has value
  //   showSuccess(username); // showSuccess->border-outline-green
  // }

  // if (email.value === "") { // if input-field has no value
  //   showError(email, "Email is required"); // showError->message
  // } else if (!isValidEmail(email.value)) { // if value in the input-field is not valid
  //   showError(email, "Email is not valid"); // showError->message
  // } else { // if input-field has valid value
  //   showSuccess(email); // showSuccess->border-outline-green
  // }

  // if (password.value === "") { // if input-field has no value
  //   showError(password, "Password is required"); // showError->message
  // } else { // if input-field has value
  //   showSuccess(password); // showSuccess->border-outline-green
  // }

  // if (password2.value === "") { // if input-field has no value
  //   showError(password2, "Repeat password please"); // showError->message
  // } else { // if input-field has value
  //   showSuccess(password2); // showSuccess->border-outline-green
  // }
});