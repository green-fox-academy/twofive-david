'use strict'
import { Animal } from "../Zoo/animal";

interface Flyable { 
  land(): boolean;  
  fly(): boolean;
  takeOff(): boolean;
}

abstract class Vehicle {
  hasWheels: boolean;
  hasWings: boolean;
  color: string;
}

class Helicopter extends Vehicle implements Flyable {
  land() {
    return true;
  }
  fly() {
    return true;
  }
  takeOff() {
    return true;
  }
}

class Bird extends Animal implements Flyable {
  land() {
    return true;
  }
  fly() {
    return true;
  }
  takeOff() {
    return true;
  }
}

