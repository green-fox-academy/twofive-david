'use strict'
export { };

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divTen(x: number): number {

  if (x === 0) {
    throw new Error(' Can\'t divide by zero');
  }
  return 10 / x;
}

try {
  console.log(divTen(0));
} catch (e) {
  console.log(e.name + e.message);
} finally {
  console.log('cica');
}