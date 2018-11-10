'use strict'

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function makeLine(xFrom: number, yFrom: number, xTo: number, yTo: number, color: string): void {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(xFrom, yFrom);
  ctx.lineTo(xTo, yTo);
  ctx.stroke();
}

for (let i: number = 20; i < 400; i += 20) {
  makeLine(i, 0, 400, i, 'orange');
  makeLine(0, i, i, 400, 'purple');
}



// figure out how to save line density in a variable