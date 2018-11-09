'use strict'


const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const midX: number = canvas.width / 2;
const midY: number = canvas.height / 2;


function makeLine(xFrom: number, yFrom: number, xTo: number, yTo: number): void {
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(xFrom, yFrom);
  ctx.lineTo(xTo, yTo);
  ctx.stroke();
}

for (let j: number = 0; j <= 200; j += 10) {
  makeLine(midX, j, midY + j, midY);
  makeLine(midX, j, midY - j, midY);
  makeLine(j, midY, midX, midY + j);
  makeLine(midX, 400 - j, midX + j, midY);
}

