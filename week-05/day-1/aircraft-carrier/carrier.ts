'use strict'

import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";

export class Carrier {
  planeStore: Aircraft[];
  ammoStore: number;
  healthPoint: number;

  constructor(ammo: number, healthPoint: number) {
    this.ammoStore = ammo;
    this.healthPoint = healthPoint;
    this.planeStore = [];
  }

  add(plane: Aircraft): void {
    this.planeStore.push(plane);
  }

  fill(ammo: number): void {
    this.planeStore.map((value, index) => {
      let ammoInNeed = this.planeStore[index].maxAmmo - this.planeStore[index].currentAmmo;
      this.planeStore[index].refill(ammoInNeed);
      this.ammoStore -= ammoInNeed;
    })
  }

  //   It should fill all the aircraft with ammo and substract the needed ammo from the ammo storage
  // If there is not enough ammo than it should start to fill the aircraftis with priority first
  // If there is no ammo when this method is called it should throw an exception

}

let myCarrier = new Carrier(300, 300);

let myPlane1 = new F16();
let myPlane2 = new F16();
let myPlane3 = new F16();
let myPlane4 = new F16();
myPlane1.currentAmmo = 2;
myPlane2.currentAmmo = 2;
myPlane3.currentAmmo = 2;
myPlane4.currentAmmo = 2;

myCarrier.add(myPlane1);
myCarrier.add(myPlane2);
myCarrier.add(myPlane3);
myCarrier.add(myPlane4);

console.log(myCarrier);
