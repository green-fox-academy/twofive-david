'use strict'

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  const { distance, time } = req.query;
  const response = {
    distance: distance,
    time: time,
    speed: distance / time
  }

  if (!distance || !time || time == 0) {
    if (time == 0) {
     res.status(202).json({ error: "cannot divide by zero" });
    return;
    }
    res.status(202).json({ error: "either time or distance missing" });
    return;
  } 
  res.status(200).json(response);
})

module.exports = app;