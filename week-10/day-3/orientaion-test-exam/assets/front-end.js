'use strict'

const xhr = new XMLHttpRequest();
const myForm = document.querySelector('form');

const sendData = () => {

  const {url, alias} = myForm.elements;
  const message = {
    url: url.value,
    alias: alias.value
  }

  
  xhr.open('POST', '/api/links');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = () => {
    const response = (JSON.parse(xhr.responseText));
  }
  xhr.send(JSON.stringify(message));
}


myForm.onsubmit = sendData;
