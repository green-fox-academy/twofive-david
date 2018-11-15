'use strict'

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function addStars(word: string): string {
  if (word.lastIndexOf('*') === word.length - 1) {
    return word;
  } else {
    word = word.slice(0, word.lastIndexOf('*') + 2) + '*' + word.slice(word.lastIndexOf('*') + 2);
    return addStars(word);
  }
}

console.log(addStars('Helloka!'));