'use strict'
export { };

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.


function addNumber(n: number): number {
  

  if (n === 0) {
    return n;
  } else {
    return n + addNumber(n-1);
  }

}

console.log(addNumber(8));