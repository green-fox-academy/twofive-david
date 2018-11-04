// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict'
export {};

let zero: number = 0;
let one: number = 1;
let size: number = 10;
//let matrix: number[] = [];

for (let x:number = 0; x <= size - 1; x++) {
  let matrix: number[] = [];

  for (let y: number = size - 1; y >= 0; y --) {
    if (x === y) {
      matrix.push(one);
    }
    else matrix.push(zero);
  }
  console.log(matrix);
}

//console.log(matrix);