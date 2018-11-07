'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let color: string [] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawRainbow(x:number, c: string []): void {
  

  for (let i: number = 0; i < color.length; i++) {
    
    let midWidth: number = (canvas.width - x) / 2;
    let midHeight: number = (canvas.height - x) / 2;
    
    ctx.fillStyle = color[i];
    ctx.fillRect(midWidth, midHeight, x, x);
    x -= 30;
    
  }
}

drawRainbow(180, color);

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

