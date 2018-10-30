export{};

'use strict'

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end.

let animals: string[] = ["koal", "pand", "zebr"];

let animals_a = animals.map(function(element){
    element += "a";
    return element;
})

console.log(animals_a);