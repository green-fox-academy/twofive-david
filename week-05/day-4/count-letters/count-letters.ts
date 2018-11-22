'use strict'
export {countLetters};

function countLetters(word: string): object {
  let myDictionary = {};

  for (let i = 0; i < word.length; i++) {
    word[i] in myDictionary ? myDictionary[word[i]] += 1: myDictionary[word[i]] = 1;
    }
    return myDictionary;
  }

//console.log(countLetters('hellokabellokaaaaaaaaaa'));
