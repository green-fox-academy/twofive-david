'use strict';
export { };

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 100 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 200 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 300 }
];

function getNameAndBalance(x: number): any[] {
  let result: any[] = [];
  for (let i: number = 0; i < accounts.length; i++) {
    if (accounts[i].accountNumber === x) {
      result.push(accounts[i].clientName);
      result.push(accounts[i].balance);
    }
  }
  return result;
}

console.log(getNameAndBalance(43546731));

function transferMoney(arr: any[], originAccount: number, destinationAccount: number, amount: number) {

  let counter = 0;

  for (let i: number = 0; i < arr.length; i++) {

    //if ((arr[i].indexOf(originAccount) !== -1) && (arr[i].indexOf(destinationAccount) !== -1) ) {

      if (originAccount === arr[i].accountNumber) {
        arr[i].balance -= amount;
        counter += 1;
      }

      if (destinationAccount === arr[i].accountNumber) {
        arr[i].balance += amount;
        counter += 1;
      }
    }
    if (counter === 2) return arr;
    else return "404 - account not found";
  }

  console.log(transferMoney(accounts, 43546731, 11234543, 50));

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//