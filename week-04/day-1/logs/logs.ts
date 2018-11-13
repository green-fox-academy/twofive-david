'use strict'
export { };

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

function readFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    return e.message;
  }
}

function createArrByLine(text: string): string[] {
  return text.split('\r\n');
}

function separateData(fileName: string): string[] {
  const array = createArrByLine(readFile(fileName));
  let mainArray = [];

  for (let i: number = 0; i < array.length; i++) {
    let dataCell = array[i].split('  ');
    mainArray.push(dataCell);
  }
  return mainArray;
}

function checkIp(arr: string[]): string[] {
  let uniqueIpData = [];

  for (let i: number = 0; i < arr.length; i++) {

    let ipString: string = arr[i][2];

    if (uniqueIpData.indexOf(ipString) === -1) {
      uniqueIpData.push(ipString);
    }
  }
  return uniqueIpData;
}

console.log(checkIp(separateData('log.txt')));

//If I wanted to save this data to a file
//fs.writeFileSync('this.txt', checkIp(separateData()));

function getPost(arr: string[]): number {
  let postNumber = 0;
  let getNumber = 0;

  for (let j: number = 0; j < arr.length; j++) {

    let postGetString: string = arr[j][3];

    postGetString === arr[1][3] ? postNumber += 1 : getNumber += 1;
  }
  return getNumber / postNumber;
}

console.log(getPost(separateData('log.txt')));