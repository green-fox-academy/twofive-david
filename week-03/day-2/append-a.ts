'use strict';
export {};
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(nameList: string[]): string[] {
 for (let i: number = 0; i < nameList.length; i++){
   nameList[i] += 'a';
 }
  return nameList;   
}

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
