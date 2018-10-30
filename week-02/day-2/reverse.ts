export{}
'use strict'

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number[] = [3, 4, 5, 6, 7];

//do it with the built in method
console.log(numList.reverse());

//do it with creating a new array and a loop
let numList_2: number[] = [3, 4, 5, 6, 7];
let newArray = [];

for (let i = numList_2.length-1;  i >= 0; i--) {
    newArray.push(numList_2[i]);
}
console.log(newArray);
