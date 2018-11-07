'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = "green";
ctx.beginPath;
ctx.moveTo(200, 100);
ctx.lineTo(300, 100);
ctx.stroke();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 100);
ctx.stroke();


// draw a box with invoking a line making function four times

function kocka(moveX: number, moveY: number, lineX: number, lineY: number, color: string): void {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(moveX, moveY);
  ctx.lineTo(lineX, lineY);
  ctx.stroke();
}


kocka(350, 100, 350, 200, "purple");
kocka(350, 200, 450, 200, "pink");
kocka(450, 200, 450, 100, "black");
kocka(450, 100, 350, 100, "yellow");


