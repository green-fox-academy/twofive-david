'use strict'

const fs = require('fs');

function read(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (e) {
    console.log('This file does not exist.');
    return null;
  }
}

function write(fileName: string, content: string): void {
  if (fs.existsSync(fileName)) {
    return fs.writeFileSync(fileName, content);
  } else {
    console.log('Can\'t write to this file because it does not exist.')
  }
}

function publishData(fileFrom: string, fileTo: string): void {
  const fileData = read(fileFrom);
  let studentCount = 0;
  let mentorCount = 0;

  if (fileData !== null) {
    const dataMatrix = fileData.split('\r\n').map(element => element.split(';'));

    dataMatrix.forEach((elem, index) => {
      if (elem[1] === 'student') {
        studentCount += 1;
      }
      else if (elem[1] === 'mentor') {
        mentorCount += 1;
      }
    })
  }
  let message = `Students: ${studentCount} Mentors: ${mentorCount}`;
  write(fileTo, message);
}

publishData('usage.csv', 'test.txt');

