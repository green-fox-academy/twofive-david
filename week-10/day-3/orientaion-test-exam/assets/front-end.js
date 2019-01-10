'use strict'

const xhr = new XMLHttpRequest();
const myForm = document.querySelector('form');
const button = document.querySelector('.send');

const sendData = () => {
  const messageParagraph = document.querySelector('p.message');
  const { url, alias } = myForm.elements;
  const message = {
    url: url.value,
    alias: alias.value
  }

  xhr.open('POST', '/api/links');
  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.onload = () => {

    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const { alias, secretcode } = response;
      messageParagraph.textContent = `Your URL is aliased to ${alias} and your secret code is ${secretcode}`;
      //console.log(alias, secretcode);
    } else {
      console.log('para');
    }
    url.value = "";
    alias.value = "";
  }

  xhr.send(JSON.stringify(message));
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  sendData();
})

// onsubmit = (e) => {
//   e.preventDefault();
//   sendData(); 
// }
