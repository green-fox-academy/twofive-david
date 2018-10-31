'use strict'

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let chessboard: string = "";
let size: number = 8;

for (let i: number = 0; i < size; i++) {

  for (let y: number = 0; y < size; y ++) {
    
    if ((y+i) % 2 === 0) {
      chessboard += '%';
    } 
    else chessboard += ' ';
  }
  chessboard += '\n'
}
console.log(chessboard);