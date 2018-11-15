'use strict'
export {};

function countDown(n: number): number {
  if (n === 0) {
    return (0);
  }
  else {
    console.log(n);
    countDown(n-1);
  }
  
}

countDown(10);