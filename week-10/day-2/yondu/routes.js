'use strict'

const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  const {distance, time} = req.query;
  const  response = {
    distance: distance,
    time: time,
    speed: distance / time
  }
  
  if (!distance || !time) {
    res.status(202).json({error: "either time or distance missing"});
    return;
  }
  res.status(200).json(response);
})

module.exports = app;