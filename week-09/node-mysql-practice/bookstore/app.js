'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;


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
