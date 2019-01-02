'use strict'

require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const mySql  = require('mysql');

const conn = mySql.createConnection({
  host: process.env.host,
  database: process.env.DB,
  user: process.env.user,
  password: process.env.password
})

conn.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connected to DB');
})

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/posts', (req, res) => {
  const sqlQuery = "SELECT * FROM mock_data LIMIT 10 OFFSET 10;";

  conn.query(sqlQuery, (err, data) => {
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});

app.get('/add-posts', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/submit-page.html'));
})

app.listen(port, () => {
  console.log(`Yo dawgs, app is listening on port ${port}`);
})