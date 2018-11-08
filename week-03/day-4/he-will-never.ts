'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

function crypticString(y: any []): string[] {
  for (let i:number = 0; i < y.length; i++){
    y[i]= y[i].toString();
  }
  return y;
}

//notSoCrypticMessage szamai at vannak alakitva stringe, hogy kesobb ossze lehessen oket hasonlitani az objecet key-kel.
let base: any[] = crypticString(notSoCrypticMessage);
let objectKeys: any[] = Object.keys(hashmap);


for (let i of base) {
  if (objectKeys === i) {
    out += Object.values(hashmap);
  }
  console.log(out);
}

console.log(out);




/*for (let i:number = 0; i < notSoCrypticMessage.length; i++) {
  
  let crypticNumber: number = notSoCrypticMessage[i];

    for (let y: number = 0; y < base.length; y ++) {
      console.log(base[y].);
    }
    console.log('crypticNo' + crypticNumber);

    }*/
    

  // let base: number[] = Object.keys(hashmap);


//console.log(out)