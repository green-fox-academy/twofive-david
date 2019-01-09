'use strict'
require('dotenv').config();

const express = require('express');
const app = express();
const port = 8000;
const mySql = require('mysql');
const connection = mySql.createConnection({
  host: process.env.HOST,
  user: process.env.user,
  database: process.env.DB,
  password: process.env.PASS
})

connection.connect(err => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Connected to database', '\n');
});

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/api/links', (req,res) => {
  const {url, alias} = req.body;

})

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
})

// CREATE TABLE data (
//   id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   url varchar(255),
//   alias varchar(255),
//   hitCount int,
//   secretCode int
// );

// INSERT INTO data (url, alias, hitCount, secretCode) VALUES ('www.hello.com', 'hello', 10, 1111);