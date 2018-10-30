export{};

'use strict'

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6];

let numList_2 = numList.map(function(element){
    if (element === 8) {
        element = 4;
        return element;
    }
    
    else return element;
});

console.log(numList_2[3]);