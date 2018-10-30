'use strict'

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ["Arthur", "Boe", "Chloe"];

function swap(a, b) {
    let x = abc[a];
    abc[a] = abc[b];
    abc[b] = x;
    return abc;
}

console.log(swap(0,2));