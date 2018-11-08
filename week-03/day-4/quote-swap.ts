'use strict';
export {};
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(n: string []): string[] {

let x = n[2];
n[2] = n[5];
n[5] = x;
return n;

}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
