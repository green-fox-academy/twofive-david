'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function lineToCenter(moveX: number, moveY: number): void {
  ctx.strokeStyle = "purple";
  ctx.beginPath();
  ctx.moveTo(moveX, moveY);
  ctx.lineTo(300, 200);
  ctx.stroke();
}

lineToCenter(600,0);

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.