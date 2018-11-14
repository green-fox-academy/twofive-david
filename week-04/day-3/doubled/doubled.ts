'use strict'
export { };

// Create a method that decrypts duplicated-chars.txt


function readFile(fileName: string): string {
  
  const fs = require('fs')

  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return e.message;
  }
}

function removeDuplicate(fileName: string): string {
  const duplicatedText: string = readFile(fileName);
  let result: string = '';

  for (let i = 0; i < duplicatedText.length; i++) {
    if (duplicatedText[i] === duplicatedText[i + 3]) {
      result += duplicatedText[i];

    } else if (duplicatedText[i] !== duplicatedText[i + 1]) {
      result += duplicatedText[i];
    }
  }
  return result;
}

console.log(removeDuplicate('duplicated-chars.txt'));