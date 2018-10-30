export {};

'use strict';

let lineCount: number = 8;
let x: number = lineCount;
let n: number = 1;

let space: string = " ";
let star: string = "*";

if(lineCount % 2 === 0){

for(let i = 1; i <= lineCount + 1; i++) {

    if (i <= lineCount / 2) {
        console.log(space.repeat(x) + star.repeat(n));
        x --;
        n += 2;
    }

    else {
        console.log(space.repeat(x) + star.repeat(n));
             x ++;
             n -= 2;
             //console.log(n);
    }
}
}
else {
    for(let i = 1; i <= lineCount; i++) {

        if (i <= lineCount / 2) {
            console.log(space.repeat(x) + star.repeat(n));
            x --;
            n += 2;
        }
    
        else {
            console.log(space.repeat(x) + star.repeat(n));
                 x ++;
                 n -= 2;
                 //console.log(n);
        }
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