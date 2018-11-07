'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function checkBoard(x: number, y: number): void {

  ctx.fillRect(x, y, 10, 10);
  ctx.fillStyle = "black";

}

for (let i: number = 0; i < 60; i++) {

  for (let j: number = 0; j < 40; j++) {

    if ((i + j) % 2 === 0) {
      checkBoard(i * 10, j * 10);
    }
  }
}