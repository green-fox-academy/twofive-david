'use strict'

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const mockData = {"posts":[{"id":2,"title":"blah","url":"http://9gag.com","timestamp":1546256371763,"score":0,"user":null},{"id":3,"title":"blah2","url":"http://9gag.com","timestamp":1546256371937,"score":0,"user":null},{"id":4,"title":"blah3333","url":"http://9gag.com","timestamp":1546256372057,"score":0,"user":null}]}

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/posts', (req, res) => {
  res.json(mockData);
});

app.listen(port, () => {
  console.log(`Yo dawgs, app is listening on port ${port}`);
})