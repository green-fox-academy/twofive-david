'use-strict'
export { };

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function readFile(fileName: string): string {

  try {
    return fs.readFileSync(fileName);
  } catch (e) {
    return null;
  }
}

function copyFile(fileOne: string, fileTwo: string): boolean {

  const txt = readFile(fileOne);

  if (txt !== null) {
    fs.writeFileSync(fileTwo, txt);
    return true;
  } else {
    return false;
  };

}

console.log(copyFile('test.txt', 'test2.txt'));
