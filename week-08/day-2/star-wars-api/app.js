'use strict'

const myButton = document.querySelector('#btn');
const inPut = document.querySelector('#myTextInput');
const nameField = document.querySelector('ul.nameDisplay')
//const characterButton = document.querySelectorAll('.characterBtn');

function createItem(arr, index) {
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
        createItem(myData, i)
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
        createItem(myData, i)
      });

      if(rawData.next) {
        loadMore(rawData.next);
      }
    }
  }
  xhr.send();
}

// nameField.addEventListener('click', function (e) {
//   const xhr = new XMLHttpRequest();
//   const thisText = e.target.textContent;
//   xhr.open('GET', `https://swapi.co/api/people`, true);

//   xhr.onload = () => {
//     if (e.target.className == 'characterBtn') {
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         const responseData = JSON.parse(xhr.responseText);

//         responseData.results.forEach((e, i) => {
//           if (thisText === responseData.results[i].name) {

//             console.log(responseData.results[i].films);

//           }
//           //console.log(responseData.results[i].films);

//         })

//       }
//     }
//   }
//   xhr.send()
// })
