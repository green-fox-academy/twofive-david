'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function makeSquare(x: number, y: number, d: number, z: number): void {
  ctx.strokeStyle = 'white';
  ctx.lineWidth = z;
  ctx.strokeRect(x, y, d, d);
}

function multipleSquare(x: number, y: number, d: number, z: number): void {
  makeSquare(x, y, d, z);
 if (d > 30) {
  z -= 3;
  multipleSquare(x - d * 0.25 , y - d * 0.25, d * 0.5, z);
  multipleSquare(x + d * 0.75 , y - d * 0.25, d * 0.5, z);
  multipleSquare(x - d * 0.25 , y + d * 0.75, d * 0.5, z);
  multipleSquare(x + d * 0.75 , y + d * 0.75, d * 0.5, z);
 }
}
multipleSquare(200, 200, 200, 10);

