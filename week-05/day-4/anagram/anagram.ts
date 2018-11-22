'use strict'

export { anagram };

function anagram(stringOne: string, stringTwo: string): boolean {
return (stringOne.toLowerCase().split('').sort().join('') === stringTwo.toLowerCase().split('').sort().join(''))
}

let myString1 = "hELLoka";
let myString2 = "llehoka";

console.log(anagram(myString1, myString2));