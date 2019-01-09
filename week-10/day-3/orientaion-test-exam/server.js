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
  console.log('Connected to database');
});

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/api/links', (req, res) => {
  const randomNo = Math.floor(Math.random() * 10000);
  const { url, alias } = req.body;

  const postDb = `INSERT INTO data (url, alias, hitCount, secretCode) VALUES ('${url}', '${alias}', 0, ${randomNo});`
  //const getAlias = `SELECT * FROM data WHERE alias = '${alias}';`;
  connection.query(postDb, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else if (data)
    res.status(200).send(data);
  });

});


const entry = 'INSERT INTO data (url, alias, hitCount, secretCode) VALUES (url, alias, 10, 1111);';


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
})

const randomNo = () => {
  return Math.floor(Math.random * 1000);
}