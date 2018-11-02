export{};
'use strict'

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

//  - Increments any index passed on as an argument to the function

let numList: number[] = [1, 2, 3, 4, 5];

function incrementIndex(n: number): number[] {
  numList[n] += 1;
  return numList;
}

console.log(incrementIndex(3));