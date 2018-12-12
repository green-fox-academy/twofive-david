'use strict'

const myBtn = document.querySelector('button.btn');

function countLi() {
  const myLis = document.querySelectorAll('li');
  const resultField = document.querySelector('p.result');
  resultField.textContent = myLis.length;
}

myBtn.addEventListener('click', countLi);