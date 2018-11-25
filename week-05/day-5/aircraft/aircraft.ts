'use strict'

export abstract class Aircraft {
  protected currentAmmo: number = 0;
  protected maxAmmo: number;
  protected baseDamage: number;


  constructor(maxAmmo: number, baseDamage: number) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }

  fight(): number {
  const damage = this.currentAmmo * this.baseDamage;
  this.currentAmmo = 0;
  return damage;
  }

  refill(ammoToFill: number) {
    let remainingAmmo: number = 0;

    if(this.currentAmmo + ammoToFill > this.maxAmmo) {
      remainingAmmo = ammoToFill - (this.maxAmmo -this.currentAmmo);
      this.currentAmmo = this.maxAmmo;
    } else {
      this.currentAmmo += ammoToFill;
    }
    return remainingAmmo;
  }

  getType(): string {
    return this.constructor.name;
  }

  getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.currentAmmo * this.baseDamage}`;
  }

  getPriority(): boolean {
    return this.getType() === 'F35';
  }

  getAllDamage(): number {
    return this.baseDamage * this.currentAmmo;
  }
}
