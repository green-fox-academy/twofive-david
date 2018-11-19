'use strict'
import { Garden } from "./garden";
import { Flower } from "./flower";
import { Tree } from "./tree";

let myGarden = new Garden();

let flowa = new Flower('rebarbara', 'yellow', 4);
let tree = new Tree('acatia', 'purple', 11);
let flowa2 = new Flower('tulipan', 'blue', 4);
let tree2 = new Tree('jacaranda', 'orange', 4);

myGarden.gardenPlants.push(flowa);
myGarden.gardenPlants.push(flowa2);
myGarden.gardenPlants.push(tree);
myGarden.gardenPlants.push(tree2);

myGarden.water(30);

