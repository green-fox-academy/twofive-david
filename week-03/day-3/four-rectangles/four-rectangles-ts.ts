'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function drawFour(fromX: number, fromY): void {
  
  let color: string[] = ["blue", "red", "purple", "green"];

  for (let i: number = 0; i < color.length; i++) {
    ctx.fillStyle = color[i];
    ctx.fillRect(fromX, fromY, fromX, fromX);
    fromX += 10;
    fromY += 90;
  }
}

drawFour(25, 25);

