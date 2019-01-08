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
    res.status(200).json(response);
  } else {
    const response = {
      "error": "I am Groot!"
    };
    res.status(202).json(response);
  }
})

module.exports = app;