'use strict';

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let totalSeconds: number = 86400;

let remainingSeconds: number = totalSeconds - (currentHours * 3600) - (currentMinutes * 60) - currentSeconds;

console.log('There is ' + remainingSeconds + ' seconds remaining from the day.');
