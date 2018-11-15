'use strict'
export { };

// Create a recursive function called `refactorio`
// that returns it's input's factorial

function factorial(x: number): number {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(6));
