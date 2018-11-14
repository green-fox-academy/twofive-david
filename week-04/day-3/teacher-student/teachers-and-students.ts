'use strict'

// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()

class Teacher {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  teach(student: Student) {
    return student.learn();
  }
  answer(): string {
    return 'You are a smart kid.';
  }

}

class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  learn() {
    return 'Thank you, I got it now.'
  }
  question(teacher: Teacher) {
    return teacher.answer();
  }
}

const david = new Student('David', 33);
const fefe = new Teacher('Olah Ferenc', 54);

console.log(fefe.teach(david));
console.log(david.question(fefe));