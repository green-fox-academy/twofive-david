'use strict'
export { };

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumOfDigits(x: number): number {
  if (x < 10) {
    return x;
  } else {
    return (x % 10) + sumOfDigits(Math.floor(x / 10));
  }
}
console.log(sumOfDigits(123454));