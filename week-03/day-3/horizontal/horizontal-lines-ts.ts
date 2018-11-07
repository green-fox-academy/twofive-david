'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.

function drawThreeLines(moveX: number, moveY: number): void {

  for (let i: number = 0; i <= 2; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(moveX, moveY);
    ctx.lineTo(moveX + 50, moveY);
    ctx.stroke();
    moveY += 50;
  }
}

drawThreeLines(150, 200);
