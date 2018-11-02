'use strict'

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ['Arthur', 'Boe', 'Chloe'];

function swap(indexA: number, indexB: number): string[] {
    let x = abc[indexA];
    abc[indexA] = abc[indexB];
    abc[indexB] = x;
    return abc;
}

console.log(swap(0,2));