'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

function purpleSteps(fromX: number, fromY: number, toX: number, toY: number) {
  
  for (let i: number = 1; i < 5; i++) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(fromX, fromY, toX, toY);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(fromX, fromY, toX, toY);

    fromX += i * 30;
    fromY += i * 30;
    toX += 30;
    toY += 30;
}
}

purpleSteps(30, 30, 30, 30);