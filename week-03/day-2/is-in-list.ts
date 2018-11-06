'use strict';
export {};
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 17, 12];
let check: number[] = [4, 8, 12, 6];

function checkNums(arr: number[]): boolean {

let lengthCounter: number = 0;

 for (let i = 0; i < check.length; i++) {
   if ( arr.indexOf(check[i]) !== -1) {
     lengthCounter +=1;
   };
 };

return (lengthCounter === check.length);

}

console.log(checkNums(listOfNumbers));
