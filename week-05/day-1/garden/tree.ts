'use strict'

import { Plant } from "./plant";

export class Tree extends Plant {
  waterTreshold = 10;
  waterAbsorbtion = 0.4;

  constructor(name: string, color: string, water: number) {
    super(name, color, water);
  }

}
