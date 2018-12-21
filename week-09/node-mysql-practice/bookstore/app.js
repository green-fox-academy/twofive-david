'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json()); // parser helyett
app.use('/static', express.static('static'));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
})

connection.connect(err => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('Connected to database', '\n');
})

app.listen(port, () => console.log(`App now listening on port ${port}`))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static/index.html'));
})

app.get('/booknames', (req, res) => {
  const booknames = 'SELECT Book_name FROM Book_mast';
  connection.query(booknames, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(data);
  })
})

app.get('/fulldata', (req, res) => {

  const fulldata = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast
  JOIN author ON book_mast.aut_id = author.aut_id
  JOIN category ON book_mast.cate_id =category.cate_id
  JOIN publisher ON book_mast.pub_id = publisher.pub_id;`;

  connection.query(fulldata, (err, data) => {
    if (err) {
      res.status(500).send(err)
    }
    res.send(data);
  })
})
