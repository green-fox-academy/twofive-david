'use strict'

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Helloka"));
app.listen(port, () => console.log(`Yo dawgs, app is now listening on port ${port}`));