'use strict'
export { };

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function readFile(fileName: string): string {

  try {
    return fs.readFileSync(fileName, 'utf-8');

  } catch (e) {
    return null;
  }
}

function countLines(param: string): number {

  let read: any = readFile(param);

  if (read !== null) {

    let lineNumber: string[] = read.split('\r\n');
    return lineNumber.length;

  } else {

    return 0;
  }
}

console.log(countLines('text.txt'));