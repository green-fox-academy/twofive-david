'use strict'
export { };
// Create a method that decrypts reversed-lines.txt

function readFile(fileName: string): string {
  const fs = require('fs');

  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return e.message;
  }
}


function reverseLines(fileName: string): string {
  const reversedTextByLine: string[] = readFile(fileName).split('\r\n');
  let solution: string[] = [];

  for (let i = 0; i < reversedTextByLine.length; i++) {
    let normalLine: string = '';

    for (let j = reversedTextByLine[i].length - 1; j >= 0; j--) {
      normalLine += reversedTextByLine[i][j];
    }
    solution.push(normalLine);
  }

  return solution.join('\r\n');
}

console.log(reverseLines('reversed-lines.txt'));
