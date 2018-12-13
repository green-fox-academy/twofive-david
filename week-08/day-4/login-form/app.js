'use strict'

const eyeIcon = document.querySelector('img.eye');

function showPassword() {
  let myInput = document.querySelector('div.password-container input');
  if (myInput.type === "password") {
    myInput.type = "text";
  } else {
    myInput.type = "password";
  }
}

eyeIcon.addEventListener('click', showPassword);