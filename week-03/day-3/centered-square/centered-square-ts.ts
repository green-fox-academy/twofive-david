'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let width = canvas.width;
let height = canvas.height;


ctx.fillStyle = "green";
ctx.fillRect(width/2 - 5, height/2 - 5, 10, 10);



// Draw a green 10x10 square to the center of the canvas.
