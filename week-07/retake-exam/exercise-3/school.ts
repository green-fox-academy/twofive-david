'use strict'

import { Santa } from "./santa";
import { Kid } from "./kid";

export class School {
  private children: Kid[] = [];

  enroll(kid: Kid): void {
    this.children.push(kid);
  }

  haveChristmas(santa: Santa): void {
    santa.assignGifts(this.children);
  }
}