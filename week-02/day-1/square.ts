export{};
'use strict'

let square: string = '';
let size: number = 7;

for (let i: number = 0; i < size; i++) {

  for (let y: number = 0; y < size; y++){

    if (y === 0 || y === size - 1) {
      square += '%';
    }
    else if (i === 0 || i === size - 1) {
      square += '%';
    }
    else square += ' ';
  }
  square += '\n';
}
console.log(square);
