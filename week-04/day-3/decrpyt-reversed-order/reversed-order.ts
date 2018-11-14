'use strict'
export { };

// Create a method that decrypts reversed-order.txt

function readFile(fileName: string): string {
  const fs = require('fs');

  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return e.message;
  }
}

function reverseCurrentLineOrder(filename: string): string {
  let result: string[] = [];

  let TextByLines: string[] = readFile(filename).split('\r\n');

  for (let i = TextByLines.length - 1; i >= 0; i--) {
    result.push(TextByLines[i]);
  }
  return result.join('\r\n');
}

console.log(reverseCurrentLineOrder('reversed-order.txt'));