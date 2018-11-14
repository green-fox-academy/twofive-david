'use strict'
export { };
// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
  gasAmount: number;

  constructor(petrol: number) {
    this.gasAmount = petrol;
  }

  refill(car: Car) {
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor(gasamount = 0, capacity = 100) {
    this.gasAmount = gasamount;
    this.capacity = capacity;
  }
}

const herbie = new Car();
console.log(herbie);
const lukiOil = new Station(500);
console.log(lukiOil.gasAmount);
lukiOil.refill(herbie);
console.log(lukiOil.gasAmount);
console.log(herbie);