export {};
'use strict';

let lineCount: number = 10;
let star: string = '*';

let space: string = ' ';
let y: number = lineCount;

for (let x: number = 1; x <= lineCount; x++) {
  let finalSpace: string = space.repeat(y);
  console.log(finalSpace + star);
  star += '**';
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