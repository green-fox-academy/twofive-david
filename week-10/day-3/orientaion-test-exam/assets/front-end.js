'use strict'


const xhr = new XMLHttpRequest();

const sendData = () => {
  xhr.open('POST', '/api/links');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = () => {
    const response = (xhr.responseText);
    console.log(response);
  }
  xhr.send(JSON.stringify({ url: 'hello' }));
}

sendData();
