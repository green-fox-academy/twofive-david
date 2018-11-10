'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function createSky(): void {


  const nightGradient = ctx.createLinearGradient(0, 0, 0, 370);
  nightGradient.addColorStop(0, 'rgb(0, 0, 26)');
  nightGradient.addColorStop(1, 'rgb(0, 0, 102)');
  ctx.fillStyle = nightGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i: number = 0; i <= 1000; i++) {
    let starSize: number = getRandomArbitrary(0, 2);
    let starPositionX: number = getRandomArbitrary(0, 600);
    let starPositionY: number = getRandomArbitrary(0, 400);
    let randomGrey: number = getRandomArbitrary(0, 255);

    ctx.fillStyle = `rgb(${randomGrey}, ${randomGrey}, ${randomGrey})`;
    ctx.fillRect(starPositionX, starPositionY, starSize, starSize);
  }
}

createSky();