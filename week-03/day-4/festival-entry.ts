'use strict';
export {};

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;
// let okToGo: string[] = [];

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(arr: any[]): any {
  for (let i: number = 0; i < arr.length; i++) {

    if (arr[i].guns) {
      watchlist.push(arr[i].name);
    }

    if (arr[i].alcohol) {
      securityAlcoholLoot += arr[i].alcohol;
      arr[i].alcohol = 0;
    }
  }
  return [watchlist, securityAlcoholLoot, queue];
}

console.log(securityCheck(queue));

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival