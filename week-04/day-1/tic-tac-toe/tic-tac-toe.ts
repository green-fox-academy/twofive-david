import { type } from "os";

'use strict'
export {};

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

const fs = require('fs');

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  }  catch (e) {
    console.log(e.message);
    return null;
  }
}

function splitToLines(fileName: string): string [] {
return readFile(fileName).split('\r\n');
}

function checkRows(fileName: string): string [] {
  const linesArray = splitToLines(fileName);

  linesArray.every(function(element, index) {
return true;
    })
    
  };


    



console.log(checkRows('win-o.txt'));

// console.log(ticTacResult('win-o.txt'))
// // Write a function that takes a filename as a parameter
// // The file contains an ended Tic-Tac-Toe match
// // We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// // Return "X", "O" or "Draw" based on the input file

// console.log(ticTacResult('win-o.txt'))
// // Should print "O"

// console.log(ticTacResult('win-x.txt'))
// // Should print "X"

// console.log(ticTacResult('draw.txt'))
// // Should print "Draw"