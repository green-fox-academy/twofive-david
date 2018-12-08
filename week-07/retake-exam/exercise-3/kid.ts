'use strict'

export class Kid {
  private name: string;
  private age: number;
  private isGood: boolean;
  private isHappy: boolean;

  constructor(name: string, age: number, good: boolean) {
    this.name = name;
    this.age = age;
    this.isGood = good;
    this.isHappy = false;
  }

  getGift(): void {
    this.isHappy = true;
  }

  introduce(): string {
    if (this.isHappy) {
      return `My name is ${this.name}, I am ${this.age} years old. I am happy!`
    } else {
      return `My name is ${this.name}, I am ${this.age} years old. I am not happy!`
    }
  }


}