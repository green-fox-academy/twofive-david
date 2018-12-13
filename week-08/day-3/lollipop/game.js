'use strict'

let myCandies = 1000;
let mylollipops = 10;

const candyDisplay = document.querySelector('dd.candies');
candyDisplay.textContent = myCandies;

const lolliDisplay = document.querySelector('dd.lollypops');
lolliDisplay.textContent = '🍭'.repeat(mylollipops);

const lollipopButton = document.querySelector('button.buy-lollypops')
const candyButton = document.querySelector('button.create-candies');

const createCandies = function () {
  myCandies += 1;
  candyDisplay.textContent = myCandies;
}

const buyLollipop = function () {
  let buyCount = 0;

  if (myCandies >= 100) {
    myCandies -= 100;
    candyDisplay.textContent = myCandies;
    mylollipops++;
    buyCount++;
  }

  for (let i = 0; i < buyCount; i++) {
    lolliDisplay.textContent += '🍭';
  }
};

document.onload = setInterval(() => {
  for (let i = 1; i < mylollipops; i += 10) {
    createCandies();
    console.log(myCandies)
  }
}, 1000);


candyButton.addEventListener('click', createCandies);
lollipopButton.addEventListener('click', buyLollipop); 