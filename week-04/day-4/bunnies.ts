'use strict'
export {};


// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnyEars(x: number): number {
  if (x===0) {
    return x;
  } else {
    return 2 + bunnyEars(x-1);
  }
}

console.log(bunnyEars(8));