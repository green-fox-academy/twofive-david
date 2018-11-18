'use strict'

export class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;


  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google', hiredStudents = 0) {
    this.name = name;
    this.age = age;
    this.gender = gender;
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