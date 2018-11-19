'use strict'

import { Plant } from "./plant";

export class Flower extends Plant {
  waterTreshold = 5;
  waterAbsorbtion = 0.75;

  constructor(name: string, color: string, water: number) {
    super(name, color, water);
  }

}
