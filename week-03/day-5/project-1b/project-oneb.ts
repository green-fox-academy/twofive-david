'use strict'

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function makeLine(xFrom: number, yFrom: number, xTo: number, yTo: number, color: string, ): void {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(xFrom, yFrom);
  ctx.lineTo(xTo, yTo);
  ctx.stroke();

}


function makeWindow(multiplierNumber: number): void {

  let windowSize: number = canvas.width / Math.sqrt(multiplierNumber);
  
  let startX: number = 0;
  let startY: number = 0;
  let toY: number = windowSize;
  let toX: number = windowSize

  
    

    for (let i: number = 1; i < 400; i += 20) {

      makeLine(0, i, i, 400, 'pink');
      makeLine(400, i, i, 0, 'grey');
    }
    
    for (let i: number = 400; i < 800; i += 20) {

      makeLine(400, i, i, 800, 'red');
      makeLine(800, i, i, 400, 'purple'); 
    }

    for (let i: number = 800; i > 400; i += 20) {

      makeLine(0, i, i, 400, 'pink');
      makeLine(400, i, i, 0, 'grey');
    }

}

makeWindow(64);
// figure out how to save line density in a variable