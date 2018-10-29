'use strict';

// Create a program that prints all the even numbers between 0 and 500

for (let x = 0; x <= 500; x++) {
    if(x % 2 === 0 && x !== 0) {
        console.log(x);
    }
}