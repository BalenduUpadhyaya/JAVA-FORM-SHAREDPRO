function validDate() {
  var today = new Date().toISOString().split("T")[0];
  document.getElementsByName("birthday")[0].setAttribute("max", today);
}

function setError(id, errorMessage) {
  document.getElementById(id).innerHTML = errorMessage;
}
function removeError(id) {
  console.log("Remove");
  document.getElementById(id).innerHTML = "";
}

function validateName(name) {
  pattern = /^[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z\s]*$/;
  console.log(name);
  return pattern.test(name);
}
function validateEmail(email) {
  pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
}
function validatePhoneNumber(phoneNumber) {
  pattern = /^[6-9]\d{9}$/;
  return pattern.test(phoneNumber);
}
function validatePassword(password, cPassword) {
  if (password != "" && cPassword != "" && password === cPassword) return true;
  else return false;
}

function validateInputs() {
  var fName = document.forms["signup"]["firstName"].value;
  var lName = document.forms["signup"]["lastName"].value;
  var email = document.forms["signup"]["email"].value;
  var birthday = document.forms["signup"]["birthday"].value;
  var phoneNumber = document.forms["signup"]["phoneNumber"].value;
  var password = document.forms["signup"]["password"].value;
  var cPassword = document.forms["signup"]["password2"].value;

  validationResult = true;

  if (!validateName(fName)) {
    validationResult = false;
    setError("first-name-error", "Name can only contain alphabets and space");
  } else {
    removeError("first-name-error");
  }
  if (!validateName(lName)) {
    validationResult = false;
    setError("last-name-error", "Name can only contain alphabets and space");
  } else {
    removeError("last-name-error");
  }
  if (!validateEmail(email)) {
    validationResult = false;
    setError("email-error", "Enter valid E-mail");
  } else {
    removeError("email-error");
  }
  if (!validatePhoneNumber(phoneNumber)) {
    validationResult = false;
    setError("phoneNumber-error", "Enter valid Phone Number without using +91");
  } else {
    removeError("phoneNumber-error");
  }
  if (!validatePassword(password, cPassword)) {
    validationResult = false;
    setError("password-error", "Both passwords do not match");
  } else {
    removeError("password-error");
  }
  return validationResult;
}
