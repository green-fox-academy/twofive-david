'use strict';

let lineCount: number = 40;
let star: string = "*";

let space: string = " ";
let y: number = lineCount;
let finalSpace: string = space.repeat(lineCount);

for (let x = 1; x <= lineCount; x++) {
    console.log(finalSpace + star);
    star += "**";
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