'use strict'

const myBtn = document.querySelector('#btn');
const message = document.querySelector('label.message');

function messageFunc(num) {
  setTimeout(function() {
    message.textContent =`${num/1000} seconds have ellapsed`}, num);
}

myBtn.addEventListener('click',messageFunc(5000));