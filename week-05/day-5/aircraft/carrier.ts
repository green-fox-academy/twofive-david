'use strict'
import { Aircraft } from "./aircraft";
import { F16 } from "./F16";
import { F35 } from "./F35";

export class Carrier {

  private aircrafts: Aircraft[] = [];
  private ammoStore: number;
  private health: number;

  constructor(ammo: number, health: number) {
    this.ammoStore = ammo;
    this.health = health;
  }

  addPlane(plane: Aircraft): void {
    this.aircrafts.push(plane);
  }

  fill(): void {
    if (this.ammoStore === 0) {
      throw 'Carrier is out of ammo!';
    }

    this.aircrafts.forEach(plane => {
      if (plane.getPriority() && this.ammoStore > 0) {
        this.ammoStore = plane.refill(this.ammoStore);
      }
    });

    this.aircrafts.forEach(plane => {
      if (!plane.getPriority() && this.ammoStore > 0) {
        this.ammoStore = plane.refill(this.ammoStore);
      }
    });
  }

  fight(opponent: Carrier): void {
    this.aircrafts.forEach(plane => {
      opponent.health -= plane.fight();
    })
  }

  getAllDamage(): number {
    let damage: number = 0;
    this.aircrafts.forEach(plane => {
      damage += plane.getAllDamage();
    })
    return damage;
  }

  getStatus(): string {


    let status = `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${this.getAllDamage()}
    Aircrafts:`;

    this.aircrafts.forEach(plane => {
      status += `\r\n${plane.getStatus()}`;
    })
    return this.health >= 0 ? status : 'It\'s dead Jimbo!!';
  }
}

let myShip = new Carrier(200, 150);

for (let i = 0; i < 6; i++) {
  i % 2 === 0 ? myShip.addPlane(new F16()) : myShip.addPlane(new F35());
}

myShip.fill();

console.log(myShip.getStatus());
