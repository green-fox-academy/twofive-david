'use strict'

let myCandies = 20;
let mylollipops = 1;
let lollipop = '\U+1F36D';

const candyDisplay = document.querySelector('dd.candies');
candyDisplay.textContent = myCandies;

const lolliDisplay = document.querySelector('dd.lollypops');
lolliDisplay.textContent = '🍭';

const lollipopButton = document.querySelector('button.buy-lollypops')
const candyButton = document.querySelector('button.create-candies');

const createCandies = function () {
  myCandies += 1;
  candyDisplay.textContent = myCandies;
}

const buyLollipop = function () {
let buyCount = 0;

  if (myCandies >= 10) {
    myCandies -= 10;
    candyDisplay.textContent = myCandies;
    mylollipops++;
    buyCount++;
  }

  for (let i = 0; i < buyCount; i++) {
    lolliDisplay.textContent += '🍭';
  }
};


candyButton.addEventListener('click', createCandies);
lollipopButton.addEventListener('click', buyLollipop); 