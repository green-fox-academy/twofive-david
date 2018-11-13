'use strict'
export {};

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
  integer = 0;
  initialValue = 0;
  

  constructor(int: number) {
    this.integer = int;
  }

  add(number: number = 1): void {
    this.integer += number;
  }

  get(): string {
    return this.integer.toString();
  }

  reset(): void {
    this.integer = this.initialValue;
  }
}

let helloka = new Counter(5);
console.log(helloka.initialValue);
console.log(helloka.integer);
console.log(typeof helloka.get());
helloka.reset();
helloka.add();
helloka.add(8);
console.log(helloka.initialValue);
console.log(helloka.integer);

