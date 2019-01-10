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

app.get('/api/links', (req, res) => {
  const getLinks = `SELECT id, url, alias, hitCount FROM data;`;

  connection.query(getLinks, (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).json(data);
  })
})

app.delete('/api/links/:id', (req, res) => {
  const { id } = req.params;

  const deleteQuery = `DELETE FROM data WHERE id = '${id}';`;
  const findQuery = `SELECT * FROM data WHERE id = '${id}';`
  const code = req.body.secretCode;

  connection.query(findQuery, (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (data.length === 0) {
      res.status(404).send('Id not found');
      return;
    }
    if (data[0].secretCode != code) {
      res.status(403).send('Keys don\'t match');
      return;
    }

    console.log(data[0].secretCode == code);

    res.status(200).json(data);
  })
})

app.get('/a/:alias', (req, res) => {
  const { alias } = req.params;
  const updateAlias = `UPDATE data SET hitCount = hitCount + 1 WHERE alias = '${alias}'`;

  connection.query(updateAlias, (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (data.affectedRows === 0) {
      res.status(404).send('Alias not found');
      return;
    }
    res.status(200).send('Hitcount incremented');
  })
})


app.post('/api/links', (req, res) => {
  const { url, alias } = req.body;
  const randomNo = Math.floor(1000 + Math.random() * 9000);
  const number = randomNo;
  const postDb = `INSERT INTO data (url, alias, hitCount, secretCode) VALUES ('${url}', '${alias}', 0, ${number});`
  const getAlias = `SELECT * FROM data WHERE alias = '${alias}';`;


  connection.query(postDb, (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    console.log(data.insertId);
  });

  res.status(200).send({ alias: alias, secretcode: number});
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
})