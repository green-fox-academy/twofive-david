'use strict'

import { Aircraft } from "./aircraft";

export class F35 extends Aircraft {
  maxAmmo = 12;
  baseDamage = 50;
  isPriority = true;
}