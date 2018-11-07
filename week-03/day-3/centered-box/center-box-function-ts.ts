'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function drawSquareCenter(x: number): void {

  let color: string[] = ["red", "yellow", "green"];

  for (let i: number = 0; i < 3; i++) {

    let midHeight: number = (canvas.height - x) / 2;
    let midWidth: number = (canvas.width - x) / 2;

    ctx.fillStyle = color[i];
    ctx.fillRect(midWidth, midHeight, x, x);
    x -= 50;

  }

}

drawSquareCenter(200);

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

