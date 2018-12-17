const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/fotoka', function(req,res) {
  res.sendFile(__dirname + '/assets/PB020826.jpg');
});

app.get('/oteigazbarat', (req, res) => {
  res.send("koszi megvagyok"); 
})

app.get('/jason', (reeq, res) => {
  res.json({
    pokemon: "szerezd meg hat mind",
    helloka: "mi van???"
  });
})

app.listen(3000);