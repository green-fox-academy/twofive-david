'use strict'

export class Plant {
  protected name: string;
  protected color: string;
  protected currentWater: number;
  protected waterAbsorbtion: number
  protected waterTreshold: number;

  constructor(name: string, color: string, water: number) {
    this.name = name;
    this.color = color;
    this.currentWater = water;
  }

  needsWater(): boolean {
    return (this.currentWater < this.waterTreshold);
  }

  addWater(amount: number): void {
    if (this.needsWater()) {
      this.currentWater += amount * this.waterAbsorbtion;
    }
  }

  getColor() {
    return this.color;
  }

  getName() {
    return this.name;
  }

}
