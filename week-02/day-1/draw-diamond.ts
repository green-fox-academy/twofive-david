export {};

'use strict';

let lineCount: number = 7;
let x: number = lineCount;

let space: string = " ";
let star: string = "*";

for(let i = 1; i <= lineCount; i++) {

    let starN = star.length;

    if (i <= lineCount / 2) {
        console.log(space.repeat(x) + star);
        x --;
        star += "**";
    }

    else {
        console.log(space.repeat(x) + star);
             x ++;
        
    }
}

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is