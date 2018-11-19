import { Mentor } from "./mentor";
import { Student } from "./student";

'use strict'

export class Cohort {
  name: string;
  students: Student [];
  mentors: Mentor [];

  constructor(name: string, students: Student [] = [], mentors: Mentor [] = []) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }
}
// Create a Cohort class that has the following

// fields:
// name: the name of the cohort
// students: a list of Students
// mentors: a list of Mentors
// methods:
// addStudent(Student): adds the given Student to students list
// addMentor(Mentor): adds the given Mentor to mentors list
// info(): prints out 'The name cohort has students.size students and mentors.size mentors.'
// The Cohort class has the following constructors:

// Cohort(name): beside the given parameter, it sets students and mentors as empty lists