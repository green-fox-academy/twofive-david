'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true }
];

// The function below checks the longest string in an array and returns its length

function padding(name: string[]): number {

  let stringNumbers: number[] = [];

  for (let i: number = 0; i < name.length; i++) {
    stringNumbers.push(name[i].length);
  }

  return Math.max(...stringNumbers);
}

//console.log(padding(['asdf', 'we', 'asdfgh']));

function printIngredients(arr: any[]) {

  let space = ' ';

  for (let i: number = 0; i < arr.length; i++) {

    let ingredient: string[] = arr[i].name;
    let needsC: string[] = arr[i].needsCooling;
    let stock: boolean[] = arr[i].inStock;



console.log(`| ${ingredient} | ${needsC} | ${stock} |`);
  }
}

printIngredients(ingredients);

