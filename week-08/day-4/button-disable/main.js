'use strict'

const formOne = document.forms[0];
const formTwo = document.forms[1];

const animalButtons = document.querySelectorAll('input[name="fav-animal"]');


const checkAnimals = () => {

  const dog = document.querySelector('input#dog');
  const cat = document.querySelector('input#cat');
  const animalButton = document.querySelector('.animal-button');

  if (dog.checked || cat.checked) {
    animalButton.disabled = false
  } else {
    animalButton.disabled = true;
  }
}

const checkYes = () => {
 const yesBox = document.querySelector('input#yes');
 const catBtn = formTwo.querySelector('button');

 if (yesBox.checked) {
    catBtn.disabled = false;
 } else {
  catBtn.disabled = true;
 }
}
 
formOne.addEventListener('change', checkAnimals);
formTwo.addEventListener('change', checkYes);