var express = require('express');
var bodyParser = require('body-parser');
var ignAPI = require('./utilities/ignAPI');

var app = express();
var port = 3000;

app.get('/', function (req, res) {
  res.send('Node Server Running on Port: ' + port);
});

app.listen(port, function () {
  console.log('Node Server running on port', 3000);
});
