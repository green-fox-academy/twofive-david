'use strict'

const express = require('express');
const app = express();
const port = 3000;
const randomThings = ["Err...Errr", "Uhm.", "Arrgh.", "Yeah."];

app.listen(port, () => console.log(`App listening on port: ${port}`));
app.use(express.json());



app.post('/sith', (req, res) => {
  const originalText = req.body.text;
  const sentences = originalText.split('.');
  sentences.pop();

  const splitSentences = sentences.map(element => {
    return element.trim().split(' ');
  });


  res.json(splitSentences);
})