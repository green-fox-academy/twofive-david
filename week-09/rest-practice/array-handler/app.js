'use strict'

const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Yo dawgs, app is now listening on port ${port}`));
app.use(express.json());

app.post('/arrays', (req, res) => {
  const inputArr = req.body.numbers; //array of numbers
  const inputMethod = req.body.what; //string = sum/ multiply/ double

  if (inputMethod === "sum") {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let result = inputArr.reduce(reducer);
    res.json(result);
  } else if (inputMethod === "multiply") {
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    let result = inputArr.reduce(reducer);
    res.json(result);
  } else if (inputMethod === "double") {
    let result = inputArr.map(e => e * 2);
    res.json(result);
  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    })
  }
})
