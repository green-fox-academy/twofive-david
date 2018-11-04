'use strict';

let lineCount: number = 8;
let space: string = ' ';
let sign: string = '$';

let squareDia: string = '';

for (let y: number = 0; y < lineCount; y ++) {
  for (let z: number = 0; z < lineCount; z++) {
    if (y === 0 || y === lineCount - 1) {
      squareDia += sign;
    }
    else if (z === 0 || z === lineCount - 1) {
      squareDia += sign;
    }
    else if (y === z) {
      squareDia += sign;
    }
    else {
      squareDia += space;
    }
  }
  squareDia += '\n';
}

console.log(squareDia);


// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is