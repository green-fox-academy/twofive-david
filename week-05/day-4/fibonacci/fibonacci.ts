'use strict'
export { fibonacci };

function fibonacci(n: number): number {
  let fibonacciSequence: number[] = [];

  for (let i = 0; i <= n; i++) {

    if (i === 0 || i == 1) {
      fibonacciSequence.push(i);
    } else {
      fibonacciSequence.push(fibonacciSequence[i - 2] + fibonacciSequence[i - 1]);
    }
  }
  return fibonacciSequence[n];
}

console.log(fibonacci(5));