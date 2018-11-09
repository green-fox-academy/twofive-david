'use strict'

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function makeLinePurple(xFrom: number, yFrom: number, xTo: number, yTo: number): void {
  ctx.beginPath();
  ctx.strokeStyle = "purple";
  ctx.moveTo(xFrom, yFrom);
  ctx.lineTo(xTo, yTo);
  ctx.stroke();
}

function makeLineGreen(xFrom: number, yFrom: number, xTo: number, yTo: number): void {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(xFrom, yFrom);
  ctx.lineTo(xTo, yTo);
  ctx.stroke();
}

for (let i: number = 20; i < 400; i += 20) {
  makeLinePurple(i, 0, 400, i);
}

for (let j: number = 20; j < 400; j += 20) {
  makeLineGreen(0, j, j, 400);
}

// figure out how to save line density in a variable