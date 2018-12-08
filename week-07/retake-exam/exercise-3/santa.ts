'use strict'

import { Kid } from "./kid";

export class Santa {
  private name: string;
  private age: number;
  'number of gifts': number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this["number of gifts"] = 100;
  }

  introduce(): string {

    if (this["number of gifts"] > 0) {
      return `My name is ${this.name}, I am ${this.age} years old. I have ${this["number of gifts"]} gifts in my bag.`;
    } else {
      return `My name is ${this.name}, I am ${this.age} years old. I do not have any gifts in my bag.`;
    }
  }

  assignGifts(kidsArr: Kid[]): number {

    let giftCount = 0;

    kidsArr.forEach(kid => {
      if (this["number of gifts"] > 1 && kid.isGood) {
        kid.getGift();
        this["number of gifts"]--;
        giftCount++;
      }
    })
    return giftCount;
  }
}