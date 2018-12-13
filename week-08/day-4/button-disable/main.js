'use strict'

const main = document.querySelector('.main');

const victor = document.getElementById("goldfish");
const dog = document.querySelector('input#dog');
const cat = document.querySelector('input#cat');

const animalButton = document.querySelector('.animal-button');
const catBtn = document.querySelector('button.cat-button');

const noBox = document.querySelector('input#no');
const yesBox = document.querySelector('input#yes');

let thankYouMessage = "";

const checkAnimals = () => {
  if (dog.checked || cat.checked) {
    animalButton.disabled = false;
    thankYouMessage = "Thank you, you've successfully signed up for cat facts";
  } else {
    animalButton.disabled = true;
  }
}

const checkYes = () => {
  if (yesBox.checked) {
    catBtn.disabled = false;
    thankYouMessage = 'Thank you, you\'ve successfully signed up for cat facts';
  } else {
    catBtn.disabled = true;
  }
}

const checkVictor = () => {
  if (victor.checked && noBox.checked) {
    animalButton.disabled = false;
    thankYouMessage = 'Sigh, we still added you to the cat facts list';
  }
}

const signUp = () => {
  alert(thankYouMessage);
}

main.addEventListener('click', e => {
  if (e.target.type === 'radio') {
    checkYes();
    checkAnimals();
    checkVictor();
  }
})

animalButton.addEventListener('click', signUp);
catBtn.addEventListener('click', signUp);
