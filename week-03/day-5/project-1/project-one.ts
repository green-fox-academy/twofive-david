'use strict'

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 50, 50);