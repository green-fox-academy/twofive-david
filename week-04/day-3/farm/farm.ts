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

  breed(animal: Animal): void {
    if (this.slots > 0) {
      this.animalList.push(animal);
      this.slots--;
    };
  }

  addNewAnimals(animalArr: Animal []): void {
    for (let animal of animalArr) {
    this.animalList.push(animal);
    this.slots--;
  }
}
  
  // slaughter(): {
    
  // }
    
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
      this.thirst -= 1;
      this.hunger -= 1;
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
  
  let myAnimals: Animal[] = createAnimals(20);
  let myAnimalsTwo: Animal[] = createAnimals(26);
  
  let myFarm: Farm = new Farm();
 
  myFarm.addNewAnimals(myAnimals);
  myFarm.addNewAnimals(myAnimalsTwo);

  console.log(myFarm.animalList[3].hunger);
 