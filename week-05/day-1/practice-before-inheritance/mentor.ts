'use strict'
import { Person } from "./person";

export class Mentor extends Person {

  level: string;

  constructor(name?: string, age?: number, gender?: string, level = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  getGoal(): void {
    console.log('Educate brilliant junior software developers');
  }
}

// let janeMentor = new Mentor();
// console.log(janeMentor.introduce());