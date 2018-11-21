'use strict'
export {Reptile, Mammal, Bird};

abstract class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  breed() {
  }
}

class Reptile extends Animal {

  breed() {
    return 'laying eggs';
  }
}

class Mammal extends Animal {

  breed() {
    return 'pushing a miniature version out';
  }
}

class Bird extends Animal {

  breed() {
    return 'laying eggs';
  }
}