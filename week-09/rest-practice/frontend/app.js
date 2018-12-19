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

app.get('/greeter', (req, res) => {
  const name = req.query.name;
  const title = req.query.title;

  if (name && title) {
    res.send({
      "welcome_message": `Oh, hi there ${name} my dear ${title}!`
    })
  } else if (title) {
    res.json(
      {
        "error": "Please provide a name!"
      }
    )
  } else if (name) {
    res.json(
      {
        "error": "Please provide a title!"
      }
    )
  }
})

app.get('/appenda/:appended', (req, res) => {
  const word = `${req.params.appended}a`;
  req.params.appended = word;
  res.send(req.params);
})

app.listen(port, () => console.log(`Yo dawgs, app is now listening on port ${port}`));