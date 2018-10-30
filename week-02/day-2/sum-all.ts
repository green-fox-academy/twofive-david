export{};
'use strict'

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the consol

let ai: number[] = [3, 4, 5, 6, 7];


    let result: number = 0;

    ai.forEach(function(element, index, array){
        result += array[index];
        return result;
    })

console.log(result);



