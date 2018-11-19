'use strict'
import { Person } from "./person";

export class Sponsor extends Person {

  company: string;
  hiredStudents: number;


  constructor(name?: string, age?: number, gender?: string, company = 'Google', hiredStudents = 0) {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = hiredStudents;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  getGoal(): void {
    console.log('Hire brilliant junior software developers.');
  }

  hire(): void {
    this.hiredStudents += 1;
  }
}

// let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
// console.log(elon.introduce());