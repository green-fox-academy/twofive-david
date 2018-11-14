'use strict'
export { };

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, ink: number) {
    this.color = color;
    this.inkAmount = ink;
  }

  use(): void {
    this.inkAmount -= 1;
  }
}

//SharpieSet Class

class SharpieSet {

  sharpieList: Sharpie[] = [];
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  removeTrash(sharpieset: Sharpie[]): Sharpie[] {
    let goodSet = sharpieset.filter(sharpie => sharpie.inkAmount > 0);

    return goodSet;
  }

  countUsable(sharpieset: Sharpie[]): number {
    let result: number = 0;

    for (let sharpie of sharpieset) {
      if (sharpie.inkAmount > 0) {
        result += 1;
      }
    }
    return result;
  }
}

//Create Sharpies for testing

function makeSharpies(): Sharpie[] {

  let mySharpies: Sharpie[] = [];

  mySharpies.push(new Sharpie('blue', 10));
  mySharpies.push(new Sharpie('red', 0));
  mySharpies.push(new Sharpie('green', 0));
  mySharpies.push(new Sharpie('black', 25));
  mySharpies.push(new Sharpie('pink', 15));

  return mySharpies;
}

let mySharpies = makeSharpies();

//Create SharpieSet instance and add Sharpies to it
let mySharpieSet = new SharpieSet('mySet');

mySharpieSet.sharpieList = mySharpies;

console.log(`The number of useable sharpies is ${mySharpieSet.countUsable(mySharpieSet.sharpieList)}`);

console.log(mySharpieSet.removeTrash(mySharpieSet.sharpieList));



