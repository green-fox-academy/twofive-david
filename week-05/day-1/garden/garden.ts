'use strict'

import { Plant } from "./plant";

export class Garden {
  gardenPlants: Plant[] = [];


  water(num: number): void {

    console.log(`Watering with ${num}`);

    let plantsToWater: Plant[] = [];

    this.gardenPlants.map((value, index) => {
      if (this.gardenPlants[index].needsWater()) {
        plantsToWater.push(this.gardenPlants[index]);
      }
    })

    for (let plant of this.gardenPlants) {

      if (plant.needsWater()) {
        console.log(`The ${plant.getColor()} ${plant.getName()} needs water.`);
      } else {
        console.log(`The ${plant.getColor()} ${plant.getName()} doesn't need water.`);
      }
    }

    plantsToWater.map((value, index) => {
      return plantsToWater[index].addWater(num / plantsToWater.length);
    });
  }
}

