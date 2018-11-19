import { read } from "fs";

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
  return fileToSplit.split('\r');
}

function getNumbers() {
  const linesArr = splitByLines('lottery.txt');
  let numbersArr: string[][] = [];
  let finalNumbersArr: string[] = [];

  for (let i = 0; i < linesArr.length; i++) {
    let anyLine = linesArr[i].split(' ');
    numbersArr.push(anyLine);
  }

  numbersArr.forEach((element, index) => {
    let numbers = numbersArr[index].pop();
    finalNumbersArr.push(numbers);
  })

  console.log(finalNumbersArr);
}

getNumbers();