'use strict'
export { };
// Create a method that decrypts encoded-lines.txt

const fs = require('fs');

function readText(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function deCodeMessage(fileaName: string): string {
  let oldMessage = readText(fileaName);
  let newMessage: string[] = [];

  for (let i = 0; i < oldMessage.length; i++) {
    let oldCode: number = oldMessage.charCodeAt(i);
    let newCode: number = oldCode - 1;
    newMessage.push(String.fromCharCode(newCode));
  }
  return newMessage.join('\r\n');
}

console.log(deCodeMessage('encoded-lines.txt'));