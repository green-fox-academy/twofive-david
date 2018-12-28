'use strict'

const myButton = document.querySelector('#btn');
const inPut = document.querySelector('#myTextInput');
const nameField = document.querySelector('ul.nameDisplay')
//const characterButton = document.querySelectorAll('.characterBtn');

function createCharItem(arr, index) {
  const newLi = document.createElement('li');
  newLi.textContent = arr[index].name;
  newLi.className = "characterBtn";
  nameField.appendChild(newLi);
}

function loadMore(url) {
  const xhr = new XMLHttpRequest;
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const myData = response.results;

      myData.forEach((e, i) => {
        createCharItem(myData, i)
      });

      if (response.next) {
        loadMore(response.next);
      }
    }
  }
  xhr.send();
}

myButton.onclick = () => {

  let keyWord = inPut.value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://swapi.co/api/people/?search=${keyWord}`, true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const rawData = JSON.parse(xhr.responseText);
      const myData = rawData.results;


      myData.forEach((e, i) => {
        createCharItem(myData, i)
      });

      if (rawData.next) {
        loadMore(rawData.next);
      }
    }
  }
  xhr.send();
}


//new xhr call for filtering movies
nameField.addEventListener('click', function (e) {
  const xhr = new XMLHttpRequest();

  if (e.target.className == 'characterBtn') {
    const thisText = e.target.textContent;
    xhr.open('GET', `https://swapi.co/api/people/?search=${thisText}`, true);

    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        const moviesArray = responseData.results[0].films;
        getFilmNames(moviesArray);
      }
    }
  }
  xhr.send()
})

function getFilmNames(arr) {
  arr.forEach(elem => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', elem, true);
    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      console.log(response.title);
    }
    xhr.send()
  })
}