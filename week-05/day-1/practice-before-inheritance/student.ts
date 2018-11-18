'use strict'

export class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  constructor (name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'School of Life', skippedDays = 0) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  getGoal(): void {
    console.log('Be a junior software developer.')
  }

  introduce(): void {
  console.log(`Hi I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }

  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}

// let janeStudent = new Student();
// console.log(janeStudent.introduce());

