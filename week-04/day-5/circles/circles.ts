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

function multiplyCircle(x: number, y: number, r: number): void {
  drawCircle(x, y, r);
  if (r > 20) {
    multiplyCircle(x, y - r * 0.5, r * 0.5);
    multiplyCircle(x + r /2.3, y + r * 0.25, r * 0.5);
    multiplyCircle(x - r /2.3, y + r * 0.25, r * 0.5);
  }
}

multiplyCircle(300, 250, 200);
