export{};

'use strict'

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function factorio(n: number): number {

	let base: number = 0;

		for (let i: number = 1; i <= n; i++) {
      base += i;
    }
	
		return base;
}

console.log(factorio(5));