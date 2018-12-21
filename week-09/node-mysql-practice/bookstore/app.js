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

  let fulldata = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM book_mast, author, category, publisher
  WHERE book_mast.aut_id = author.aut_id
  AND book_mast.cate_id = category.cate_id
  AND book_mast.pub_id = publisher.pub_id`

  if (req.query.category) {
    if(req.query.category !== 'all') {
      fulldata += ` AND cate_descrip = '${req.query.category}'`
    }
  }

  if (req.query.publisher) {
    if(req.query.publisher !== 'all') {
    fulldata += ` AND pub_name = '${req.query.publisher}'`
    }
  }

  if (req.query.min_price) {
    fulldata += ` AND book_price > '${req.query.min_price}'`
  }

  if (req.query.max_price) {
    fulldata += ` AND book_price < '${req.query.max_price}'`
  }

  fulldata += `;`;

  connection.query(fulldata, (err, data) => {
    if (err) {
      res.status(500).send(err)
    }

    res.send(data);
  })
})

app.get('/categories', (req,res) => {
  const sqlstring = 'SELECT cate_descrip FROM category;'

  connection.query(sqlstring, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(data);
  })

})

app.get('/publishers', (req,res) => {
  const sqlstring = 'SELECT pub_name FROM publisher;'

  connection.query(sqlstring, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(data);
  })
})