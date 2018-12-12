'use strict'

// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, 
// a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

const btn = document.querySelector('#btn');
let counter = 0;

function increaseCount() {
  counter++;
  console.log(counter);
}

function checkCount() {
  if (counter === 3) {
    const messageSpace = document.querySelector('label.message');
    messageSpace.textContent = '5 seconds elapsed and clicked 3 times';
  }
}


setTimeout(function() {btn.addEventListener('click', increaseCount);}, 5000)
setTimeout(function() {btn.addEventListener('click', checkCount);}, 5000)





