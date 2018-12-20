'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.json());

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
  res.send('Welcome to my muthafucking bookstore!!!');
})

app.get('/booknames', (req, res) => {
  const booknames = 'SELECT Book_name FROM Book_mast';
  connection.query(booknames, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }

    const booksArr = data.map(elem => elem["Book_name"]);
    res.send(booksArr);
  })
})