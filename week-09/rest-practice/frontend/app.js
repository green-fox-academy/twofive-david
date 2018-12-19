'use strict'

const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {

  const { input } = req.query;

  if (input) {
    res.json(
      {
        received: input,
        result: input * 2,
      }
    )
  } else {
    res.json(
      {
        "error": "Please provide an input!"
      }
    )
  }
})

app.listen(port, () => console.log(`Yo dawgs, app is now listening on port ${port}`));