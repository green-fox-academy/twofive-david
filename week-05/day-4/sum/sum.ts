'use strict'
import { test } from "../../../node_modules/tape";

const myArr = [1, 2, 4, 6];

class Sum {

  sum(arr: number[]) {
    return arr.reduce((x, y) => x + y);
  }
}


test('Testing myObject.sum() method', (t: any) => {
  const myObject = new Sum();

  t.equal(myObject.sum(myArr), 13);
  t.end();
})

// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you
// test your method with an empyt list
// with a list with one element in it
// with multiple elements in it
// with a null
// with a string
// Run them
// Fix your code if needed