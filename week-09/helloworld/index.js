'use strict'

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  res.render('home', {
    title: "Hello World",
    name: "David",
    age: 34
  });
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});