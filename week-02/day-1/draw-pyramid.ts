export {};
'use strict';

let lineCount: number = 10;
let star: string = '*';

let space: string = ' ';
let y: number = lineCount;
let finalSpace: string = space.repeat(y);

for (let x: number = 1; x <= lineCount; x++) {
  console.log(finalSpace + star);
  star += '**';
  finalSpace = space.repeat(y-1);
  y --;
}



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is