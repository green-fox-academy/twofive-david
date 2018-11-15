'use strict'
export { };

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function dropX(word: string): string {
  if (word.indexOf('x') === -1) {
    return word;
  } else {
    word = word.slice(0, word.indexOf('x')) + word.slice(word.indexOf('x') + 1);
    return dropX(word);
  }
}

console.log(dropX('Sziaxgecxccxxmivan'))