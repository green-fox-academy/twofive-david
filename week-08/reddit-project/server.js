'use strict'

require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const mySql = require('mysql');

const conn = mySql.createConnection({
  host: process.env.host,
  database: process.env.DB,
  user: process.env.user,
  password: process.env.password
})

app.use(express.json())

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
  const sqlQuery = "SELECT * FROM mock_data";

  conn.query(sqlQuery, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});

app.get('/add-posts', (req, res) => {
  res.sendFile(path.join(__dirname + '/static/submit-page.html'));
})

app.post('/add-posts', (req, res) => {
  const newItemTitle = req.body.title;
  const newItemUrl = req.body.url;
  const date = 10;
  const insertItem = 'INSERT INTO mock_data SET ?';
  const item = { id: null, title: newItemTitle, url: newItemUrl, timestamp: date, score: 0 }

  conn.query(insertItem, item, (err, response) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(response);
  })

  res.send('megkaptam, koszi');
})

app.listen(port, () => {
  console.log(`Yo dawgs, app is listening on port ${port}`);
})