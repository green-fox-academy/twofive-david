'use strict'
export {};

// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class postIt {
  backgroundColor: string;
  text: string;
  textColor: string;
}

const instanceOne = new postIt();
instanceOne.backgroundColor = 'orange';
instanceOne.text = 'Idea 1';
instanceOne.textColor = 'blue';

const instanceTwo = new postIt();
instanceTwo.backgroundColor = 'pink';
instanceTwo.text = 'Awesome';
instanceTwo.textColor = 'black';

const instanceThree = new postIt();
instanceThree.backgroundColor = 'yellow';
instanceThree.text = 'Superb';
instanceThree.textColor = 'green';

console.log(instanceThree.backgroundColor);
