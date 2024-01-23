let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

  return true;
}

function validatePhone() {
  let phone = document.getElementById("phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "phone is required";
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerHTML = "phone no should be 11 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "only digits";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid email";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("message").value;
  let required = 30;
  let left = required - message.length;
  if (message.length == 0) {
    messageError.innerHTML = "message is required";
    return false;
  }
  if (left > 0) {
    messageError.innerHTML = left + "more characters required";
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the error to submit";

    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
