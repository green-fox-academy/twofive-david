'use strict'

export class Aircraft {
  maxAmmo: number;
  currentAmmo: number;
  baseDamage: number;
  allDamage: number;
  isPriority: boolean;


  fight() {
    let amunition: number = this.currentAmmo;
    this.currentAmmo = 0;
    return this.baseDamage * amunition;
  }

  refill(x: number) {
  let missingAmo = this.maxAmmo - this.currentAmmo;
  this.currentAmmo += missingAmo;
  return x - missingAmo;
  }

  getType() {
    return this.constructor.name;
  }

  getStatus() {
    return `Type: ${this.constructor.name}, ammo: ${this.currentAmmo}, base damage: ${this.baseDamage}, all damage: ${this.allDamage}.`
  }

}