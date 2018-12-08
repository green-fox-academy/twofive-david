'use strict'

import { Kid } from "./kid";

export class Santa {
  private name: string;
  private age: number;
  private numberOfGifts: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.numberOfGifts = 100;
  }

  introduce(): string {

    if (this["number of gifts"] > 0) {
      return `My name is ${this.name}, I am ${this.age} years old. I have ${this.numberOfGifts} gifts in my bag.`;
    } else {
      return `My name is ${this.name}, I am ${this.age} years old. I do not have any gifts in my bag.`;
    }
  }

  assignGifts(kidsArr: Kid[]): number {

    let giftCount = 0;

    kidsArr.forEach(kid => {
      if (this.numberOfGifts > 1 && kid.getHappy()) {
        kid.getGift();
        this.numberOfGifts--;
        giftCount++;
      }
    })
    return giftCount;
  }
}