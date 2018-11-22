'use strict'

import { Animal } from "./animal";
import { test } from "../../../node_modules/tape";


test('Testing Animal.eat()', (t: any) => {
  const myAnimal = new Animal();
  myAnimal.eat();
  myAnimal.eat();
  myAnimal.eat();
  t.equal(myAnimal.hunger, 47);
  t.end()
})

test('Testing Animal.drink()', (t: any) => {
  const lion = new Animal();
  t.equal(lion.thirst, 50);
  lion.drink();
  t.equal(lion.thirst, 49)
  t.end();
})

test('Testing Animal.play()', (t: any) => {
  const bear = new Animal();
  t.equal(bear.thirst, 50);
  t.equal(bear.hunger, 50);
  
  bear.play();
  bear.play();
  bear.play();

  t.equal(bear.thirst, 53);
  t.notEqual(bear.hunger, 55);
  t.end();
})