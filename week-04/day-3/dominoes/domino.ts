'use strict'
import { Printable } from "../../../week-05/day-3/printable/printable";

class Domino implements Printable {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }
  printAllFields() {
    console.log(this.values)
  }
}

export {Domino};