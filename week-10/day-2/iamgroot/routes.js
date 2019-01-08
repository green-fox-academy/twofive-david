'use strict'

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  const { message } = req.query;
  if (message) {
    const response = {
      received: message,
      translated: 'I am groot'
    };
    res.json(response);
  } else {
    const response = {
      "error": "I am Groot!"
    };
    res.json(response);
  }
})

module.exports = app;