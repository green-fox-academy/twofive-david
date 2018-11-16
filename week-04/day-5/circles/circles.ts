'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawCircle(x: number, y: number, d: number): void {
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.arc(x, y, d, 0, Math.PI * 2);
  ctx.stroke();
}

function multiplyCircle(x: number, y: number, d: number): void {
  drawCircle(x, y, d);
  if (d > 30) {
    multiplyCircle(x, y - d * 0.45, d * 0.55);
    multiplyCircle(x + d * 0.3, y + d * 0.32, d * 0.55);
    multiplyCircle(x - d * 0.32, y + d * 0.32, d * 0.55);
  }
}

multiplyCircle(300, 200, 150);
