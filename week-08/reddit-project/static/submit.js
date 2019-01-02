'use strict'

const myForm = document.querySelector('#add-post');

myForm.addEventListener('submit', () => {
  
const xhr = new XMLHttpRequest();
const requestBody = {
  title: "Return of the Space Cowboy",
  url: "www.jamiroquai.com"
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