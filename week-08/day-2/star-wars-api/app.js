'use strict'

const myButton = document.querySelector('#btn');
const inPut = document.querySelector('#myTextInput');
const nameField = document.querySelector('ul.nameDisplay')
//const characterButton = document.querySelectorAll('.characterBtn');

myButton.onclick = () => {

  let keyWord = inPut.value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://swapi.co/api/people/?search=${keyWord}`, true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const rawData = JSON.parse(xhr.responseText);
      const myData = rawData.results;

      myData.forEach((e, i) => {
        const newLi = document.createElement('li');
        newLi.textContent = myData[i].name;
        newLi.className = "characterBtn";
        nameField.appendChild(newLi);
      });
    }
  }
  xhr.send();
}

nameField.addEventListener('click', function (e) {
  const xhr = new XMLHttpRequest();
  const thisText = e.target.textContent;
  xhr.open('GET', `https://swapi.co/api/people`, true);

  xhr.onload = () => {
    if (e.target.className == 'characterBtn') {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
      
        responseData.results.forEach((e,i) => {
          if(thisText === responseData.results[i].name) {

            console.log(responseData.results[i].films);

          }
            //console.log(responseData.results[i].films);
    
        })

      }
    }
  }
  xhr.send()
})
