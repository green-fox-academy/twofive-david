'use strict'

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

 res.render('home', {text: `Welcome back ${req.query.name || 'Guest'}`});
})

app.listen(3000);