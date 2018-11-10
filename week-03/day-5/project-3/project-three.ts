'use strict'

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
let side: number = 30;
//draw **One** triangle with two parameters: starting point x and Y coordinates - this is its left side corner)


//oneTriangle(canvas.width/2, canvas.height/2);

function bigTriangle(size: number): any {

  let fromX: number = canvas.width / 2 - side / 2;
  let fromY: number = 0;

  function oneTriangle(): void {

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(fromX + side, fromY);
    //ctx.moveTo(fromX + 30, fromY);
    ctx.lineTo(fromX + side / 2, fromY - Math.sqrt(675));
    //ctx.moveTo(fromX + 15, fromY - Math.sqrt(675));
    ctx.lineTo(fromX, fromY);
    ctx.stroke();
  }

  for (let i: number = 1; i <= size; i++) {

    fromX -= side * i - 15;
    fromY += Math.sqrt(675);

    for (let j: number = 0; j < i; j++) {

      oneTriangle();
      fromX += side;
    }

  }
}

bigTriangle(20);