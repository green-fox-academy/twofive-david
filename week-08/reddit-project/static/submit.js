'use strict'

const myForm = document.querySelector('#add-post');

myForm.addEventListener('submit', () => {

  const title = document.querySelector('input#title');
  const url = document.querySelector('input#url');
  
const xhr = new XMLHttpRequest();
const requestBody = {
  title: title.value,
  url: url.value
};

xhr.onload = () => {
  if(xhr.status === 200) {
    const response = xhr.responseText;
    console.log(response);
  }
};

xhr.open('POST', "http://localhost:8000/add-posts");
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(requestBody));

})