'use strict';

// function practice() {
//   setTimeout(
//     ()=>console.log('TIMED OUT!'), 
//     300);
// }

// practice();

// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.

// Then, print the contents of the promise after it has been fulfilled by passing
// console.log to then.

// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => fulfill('FULFILLED!'), 300)
// });

// promise.then((data) => console.log(data));

// Create a promise that after a delay of 300ms, rejects with an Error object.
// The Error object should be constructed with parameter 'REJECTED!', which is
// the textual message of the error.

// Create a function onReject to print error.message using console.log. Pass
// this function as a rejection handler to the then method of your promise.

// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => reject(new Error('REJECTED!')), 300)
// });

// function onReject (error) {
//   console.log(error.message);
// }


// promise.then(null ,onReject);

// const promise = new Promise((fulfill, reject) => {
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// })

// function onRejected(error) {
//   console.log(error.message);
// } 

// promise.then(console.log, onRejected);

// const promise = new Promise((fulfill, reject) => {
//   fulfill('PROMISE VALUE');
// })

// promise.then(console.log);
// console.log('MAIN PROGRAM');

// const promise = Promise.resolve('I am resolved');
// promise.then(console.log);


// const promiseRejected = Promise.reject(new Error('ajjaj'));
// promiseRejected.catch(error => console.log(error.message));

// function first() {
//   return new Promise((fulfill, reject) => fulfill('secret value'));
// }

// function second(value) {
//   return new Promise((fulfill, reject) => fulfill(value));
// }

// second(first()).then(console.log);



//   * Declare a function `attachTitle` which prepends `'DR. '` to its firstargument and returns the result.
//   * Create a fulfilled promise with a value of `'MANHATTAN'`.
//   * Build a promise chain off the promise we just constructed that first calls`attachTitle` then calls `console.log`.

// If your program runs successfully, it should print out “DR. MANHATTAN” which
// is extremely exciting.

// function attachTitle(arg) {
//   return `DR. ${arg}`;
// }

// const promise = Promise.resolve('MANHATTAN');
// promise.then(attachTitle).then(console.log);

// #######The key thing to understand here is that your handlers will wrap your
// ###### return values in promises even if they are obtained synchronously.

// function parsePromised(json) {
//   return new Promise((fulfill, reject) => {

//     try {
//       fulfill(JSON.parse(json));
//     } catch (err) {
//       reject(err.message);
//     }
//   })
// }

// parsePromised(process.argv[2])
//   .then(console.log)
//   .catch(console.log);

//***AN IMPORTANT RULE***

// function alwaysThrows() {
//   throw new Error('OH NOES');
// }

// function iterate(num) {
//   console.log(num);
//   return num + 1;
// }

// const promise = Promise.resolve(iterate(1));

// promise
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(alwaysThrows)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .then(iterate)
//   .catch(error => console.log(error.message))
// let prOne = Promise.resolve('6');
// let prTwo = Promise.resolve('7');


// function getPromise1() {
//   return Promise.resolve('gadgeteers');
// }

// function getPromise2() {
//   return Promise.resolve('lothefull')
// }

//more promises waiting for each other

// function all(promiseOne, promiseTwo) {

//   return new Promise((resolve, reject) => {
//     let counter = 0;
//     let out = [];

//     promiseOne.then((val) =>  {
//       out[0] = val;
//       counter ++; 

//       // if ( counter == 2) {
//       //   resolve(out);
//       // }
//     })

//     promiseTwo.then((val)=> {
//       out[1] = val;
//         counter ++;
//         //console.log(counter, out)
//         if ( counter == 2) {
//           resolve(out);
//         }
//       })
//     })
//   }

// all(getPromise1(), getPromise2()).then(console.log);
let firstPromise = Promise.resolve('Hello');
let secondPromise = (string) => {
  if (string === 'Hello') {
    return Promise.resolve(`${string} Bello!`)
  } else {
    return Promise.reject(new Error('Bro, do you even code?'));
  }
}

firstPromise
  .then()
  .then((val) => secondPromise(val))
  .then((val) => console.log(val))
  .then((val) => secondPromise(val))
  .then((val) => console.log(val))
  .catch(error => console.log(error.message))