'use strict'

import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {
  maxAmmo = 8;
  baseDamage = 30;
  isPriority = false;
  
}

// let myPlane = new F16();
// myPlane.currentAmmo = 3;
// console.log(myPlane.currentAmmo);
// console.log(myPlane.refill(200));
// console.log(myPlane.getStatus());