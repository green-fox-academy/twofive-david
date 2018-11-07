'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.


function diagonal(moveX: number, moveY: number, lineX: number, lineY: number, color: string): void {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(moveX, moveY)
  ctx.lineTo(lineX, lineY);
  ctx.stroke();
}

for (let i: number = 0; i < 2; i++) {

  let width = canvas.width;
  let height = canvas.height;

  if (i === 0) {
    diagonal(0, 0, width, height, "red");
  }
  else {
    diagonal(0, height, width, 0, "green");
  }
}