'use strict'

const myNav = document.querySelector('#nav');
const myImage = document.querySelector('.img-inspector');
myImage.style.backgroundSize = '200%';

let currentRatio = parseInt(myImage.style.backgroundSize);
let posX = 0;
let posY = 0;

myNav.addEventListener('click', function doThat(e) {
      if (e.target.dataset.direction === "in") {
            currentRatio *= 1.1;
            myImage.style.backgroundSize = `${currentRatio}%`;     
      } 
      else if (e.target.dataset.direction === "out") {
            currentRatio *= 0.9;
            myImage.style.backgroundSize = `${currentRatio}%`;
      }
      else if (e.target.dataset.direction === "up") {
            posY += 10;
            myImage.style.backgroundPosition = `${posX}px ${posY}px`;
      }
      else if (e.target.dataset.direction === "down") {
            posY -= 10;
            myImage.style.backgroundPosition = `${posX}px ${posY}px`;
      }
      else if(e.target.dataset.direction === "left") {
            posX += 10;
            myImage.style.backgroundPosition = `${posX}px ${posY}px`;
      }
      else if (e.target.dataset.direction === "right") {
            posX -= 10;
            myImage.style.backgroundPosition = `${posX}px ${posY}px`;
      }
})



