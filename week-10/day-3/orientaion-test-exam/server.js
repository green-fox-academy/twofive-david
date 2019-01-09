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

const randomNo = () => {
  return Math.floor(Math.random * 1000);
}

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

app.get('/api/links', (req, res) => {
  const getLinks = `SELECT id, url, alias, hitCount FROM data;`;

  connection.query(getLinks, (err, data) =>{
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).json(data);
  })

})



app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  const randomNo = Math.floor(1000 + Math.random() * 9000);
  const number = randomNo;
  const postDb = `INSERT INTO data (url, alias, hitCount, secretCode) VALUES ('${url}', '${alias}', 0, ${number});`
  const getAlias = `SELECT * FROM data WHERE alias = '${alias}';`;
  let aliasState = "";


  connection.query(postDb, (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    console.log(data.insertId);
  });

  // connection.query(getAlias, (err, data) => {
  //   if (err) {
  //     res.status(500).send(err);
  //     return;
  //   }
  //   if (data.length !== 0) {
  //     aliasState = "taken";
  //   }
  // })

  res.status(200).send({ status: "ok" });
});




//const entry = 'INSERT INTO data (url, alias, hitCount, secretCode) VALUES (url, alias, 10, 1111);';


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
})