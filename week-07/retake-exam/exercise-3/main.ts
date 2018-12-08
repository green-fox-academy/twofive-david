'use strict'

import { Kid } from "./kid";
import { Santa } from "./santa";
import { School } from "./school";

const mySchool = new School();

const petike = new Kid('Petike', 8, true);
const ancsika = new Kid('Ancsika', 4, true);
const jozsika = new Kid('Jozsika', 6, true);
const belzebub = new Kid('Belzi', 6, false);

mySchool.enroll(petike);
mySchool.enroll(ancsika);
mySchool.enroll(jozsika);
mySchool.enroll(belzebub);

const mySanta = new Santa('Laciba', 52);

console.log(mySanta.introduce());
console.log(ancsika.introduce());

mySchool.haveChristmas(mySanta);

console.log(mySanta.introduce());
console.log(ancsika.introduce());
console.log(belzebub.introduce());
