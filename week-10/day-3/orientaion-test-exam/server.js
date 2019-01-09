'use strict'

const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/api/links', )

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
})

