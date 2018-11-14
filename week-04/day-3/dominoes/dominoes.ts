import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// console.log(dominoes[1].values[0]);
// console.log(dominoes[1].values[1]);
// console.log(dominoes[2].values[0]);
// console.log(typeof dominoes[2].values[1]);

// print(dominoes);
function matchDominoes(arr: Domino[]): Domino[] {
  let result: Domino[] = [];

  for (let i = 0; i < dominoes.length - 1; i++) {
    for (let j = 0; j < dominoes.length; j++) {
      if ((result.length) === 0) {
        result.push(dominoes[j]);
      }
      else if ((result[i].values[1]) === dominoes[j].values[0]) {
        //result.push(dominoes[i].values);
        result.push(dominoes[j]);
      }
    }

  }

  return result;
}
console.log(matchDominoes(dominoes));


// dominoes.splice(dominoes.indexOf(dominoes[i]), 1)
// dominoes.splice(dominoes.indexOf(dominoes[j]), 1)