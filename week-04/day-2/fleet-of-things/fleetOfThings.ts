//import { Thing } from "./thing";
import { Fleet } from "./fleet";
import { Thing } from "./thing";

let fleet = new Fleet();
let myThingOne = new Thing('Get milk');
let myThingTwo = new Thing('Remove the obstacles');
let myThingThree = new Thing('Stand up');
let myThingFour = new Thing('Eat lunch');

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

fleet.add(myThingOne);
fleet.add(myThingTwo);
fleet.add(myThingThree);
fleet.add(myThingFour);

myThingThree.complete();
myThingFour.complete();


fleet.print();