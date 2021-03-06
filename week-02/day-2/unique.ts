'use strict'

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let testArray: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(arr: number[]): number[] {

  let newArray: number[] = [];

  for (let i: number = 0; i < arr.length; i++) {
        
    let elem: number = arr[i];

    if (newArray.indexOf(elem) === -1) {
      newArray.push(elem);
    }
  }
    return newArray;
}

console.log(unique(testArray));
