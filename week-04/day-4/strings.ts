'use strict'
export {};
// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeX(word: string): string {
  

  if (word.indexOf('x') === -1) {
    return word;
  } else {
    word = word.replace('x', 'y');
    return changeX(word);
}}

console.log(changeX('xanaxaxxaxxxaaaxxx'));