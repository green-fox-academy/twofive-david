'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

function candy (list: any): number {
  let result = 0;
  
    for(let i: number = 0; i < list.length; i++) {
     
      result += list[i].candies;

    }
    return result;
}

console.log(candy(students));

function sumAge (list: any): number {
  let result = 0;

  for (let i: number = 0; i < list.length; i++ ) {
    if (list[i].candies < 5) {
      result += list[i].age;
    }
  }

  return result;
}


console.log(sumAge(students));
// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have less than 5 candies