'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

function richKids(arr: any): string[] {

  let answer: string[] = [];

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].candies > 4) {
      answer.push(arr[i].name);
    }
  }
  return answer;
}

console.log(richKids(students));


function avgCandy(arr: any): number {

  let totalCandy: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    totalCandy += arr[i].candies;
  }
  
  return totalCandy/arr.length;
}

console.log(avgCandy(students));
// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average