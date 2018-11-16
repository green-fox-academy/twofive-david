'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function makeSquare(x: number, y: number, s: number): void {
ctx.fillStyle = 'white';
ctx.fillRect(x, y, s, s);
}

function multiplySquare(x: number, y: number, s: number): void {
  makeSquare(x, y, s);
  if (s > 5) {
    multiplySquare(x + s * 0.333, y - s * 0.666, s * 0.333);
    multiplySquare(x + s * 0.333, y + s * 1.333, s * 0.333);
    multiplySquare(x - s * 0.666, y - s * 0.666, s * 0.333);
    multiplySquare(x - s * 0.666, y + s * 1.333, s * 0.333);
    multiplySquare(x - s * 0.666, y + s * 0.333, s * 0.333);
    multiplySquare(x + s * 1.333, y - s * 0.666, s * 0.333);
    multiplySquare(x + s * 1.333, y + s * 0.333, s * 0.333);
    multiplySquare(x + s * 1.333, y + s * 1.333, s * 0.333);
  }
}

multiplySquare(200, 200, 200);
