'use strict'
import { test } from "tape";
import { join } from "path";

const m = [
  ["h", "p", "e"],
  ["k", "l", "a"],
  ["l", "m", "o"]
]

// Result `"no"`

//solution with for loop
// function getString(matrix: string[][]): string {
//   let result: string = '';
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (i % 2 === 0 && j % 2 === 0) {
//         result += matrix[i][j];
//       }
//       if (i % 2 === 1 && j % 2 === 1) {
//         result += matrix[i][j];
//       }
//     }
//   }
//   return result;
// }

function getString(matrix: string[][]): string {
  let result: string = '';
  matrix.map((element, i) => {
    matrix[i].map((el, j) => {
      if (i % 2 === 0 && j % 2 === 0) {
        result += el;
      }
      if (i % 2 === 1 && j % 2 === 1) {
        result += el;
      }
    })
  })
  return result;
}

console.log(getString(m));

test('myTest', t => {
  t.deepEqual(getString(m), 'hello');
  t.end();
})

test('my second test', t => {
  t.notDeepEqual(getString(m), 'laci');
  t.end();
})