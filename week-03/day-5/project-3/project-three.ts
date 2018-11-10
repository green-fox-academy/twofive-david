'use strict'

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//function draws one triangle with one parameter: the size  (how many trinagles to stack on each other)

function bigTriangle(size: number): any {

  let side = 30;

  let fromX: number = canvas.width / 2 - side / 2;
  let fromY: number = 0;

  function oneTriangle(): void {

    ctx.fillStyle ="#" + (Math.random().toString(16) + "000000").substring(2, 8);

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

bigTriangle(22);