'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleSteps(fromX: number, fromY: number) {
  
  for (let i: number = 0; i < 10; i++) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(fromX, fromY, 30, 30);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(fromX, fromY, 30, 30)

    fromX += 30;
    fromY += 30;
}
}

purpleSteps(30, 30)