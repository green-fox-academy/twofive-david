'use strict'

const fs = require('fs');

function readMyFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log('File not found.')
    return null;
  }
}

function splitByLines(fileName: string): string[] {
  const fileToSplit = readMyFile(fileName);
  return fileToSplit.split('\n\r');
}

console.log(splitByLines('lottery.txt'));

function getLotteryNumbers(fileName: string): void {
  const fileByLines = splitByLines('lottery.txt');


  const matrix = fileByLines.map(function (value, index) {
    return fileByLines[index].split(' ');
  })


  let numbersArr: string[] = [];
  for (let i = 0; i < matrix.length; i++) {
    numbersArr.push(matrix[i][matrix[i].length - 1]);
  }
  console.log(numbersArr[1].split(';'));
}

//    let numbers: string [][] = numbersArr.map(function(value, index) {
//     return numbersArr[index].split(';');
//   })
//   console.log(numbers);
//   }

// getLotteryNumbers('lottery.txt');