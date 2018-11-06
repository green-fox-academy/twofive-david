'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

let extraLines: string = ' always takes longer than ';

let string_one: string = quote.slice(0, 20);
let string_two: string = quote.slice(21);

//quote = quote.replace(quote.substring(18, 20), extraLines);

console.log(string_one + extraLines + string_two);