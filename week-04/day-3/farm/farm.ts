'use strict'

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal


class Farm {

  slots: number = 50;
  animalList: Animal[] = [];

  breed(animal: Animal[]): void {
    if (this.slots > 0) {
      this.animalList.push(animal[0]);
      this.slots--;
    } else {
      console.log('The farm is full - sorryka.');
    };
  }

  addNewAnimals(animalArr: Animal[]): void {
    if (this.slots - animalArr.length > 0) {
      for (let animal of animalArr) {
        this.animalList.push(animal);
        this.slots--;
      }
    } else {
      console.log('The farm is full - sorryka.');
    }
  }

  slaughter() {

    let indexToKill = 0;

    for (let i = 0; i < this.animalList.length; i++) {
      if (this.animalList[i].hunger < this.animalList[indexToKill].hunger) {
        indexToKill = i;
      }
    }
    this.animalList.splice(indexToKill, 1);
    this.slots++;
  }
}




class Animal {
  type: string;
  hunger: number;
  thirst: number;

  constructor(breed: string, hunger: number = 50, thirst: number = 50) {
    this.type = breed;
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat(): void {
    this.hunger += 1;
  }

  drink(): void {
    this.thirst += 1;
  }

  play(): void {
    this.thirst -= 10;
    this.hunger -= 10;
  }
}

//creates a random animal string from the array in global variable

function randomAnimal(): string {
  const animalsOfChoice: string[] = ['Cow', 'Chicken', 'Horse', 'Cat', 'Goat', 'Dog', 'Donkey'];

  let newIndex = Math.floor(Math.random() * 6 + 1);
  return animalsOfChoice[newIndex];
}


//creates an array of random animals by invoking randomAnimal() in a loop
function createAnimals(x: number): Animal[] {

  let myAnimals: Animal[] = [];

  for (let i = 0; i < x; i++) {
    myAnimals.push(new Animal(randomAnimal()));
  }
  return myAnimals;
};

let myAnimals: Animal[] = createAnimals(10);

let myFarm: Farm = new Farm();

myFarm.addNewAnimals(myAnimals);
myFarm.breed(createAnimals(1));
myFarm.animalList[3].play();
myFarm.animalList[3].play();

//console.log(myFarm.animalList);
console.log(myFarm.slots);
myFarm.slaughter();
console.log(myFarm.slots);
console.log(myFarm.animalList);


