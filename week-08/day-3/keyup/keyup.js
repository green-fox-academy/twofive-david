'use strict'

window.addEventListener('keyup', function(e) {
  const resultLine = document.querySelector('h1.result');
  resultLine.textContent = `The last pressed key is: ${e.key}`;
});