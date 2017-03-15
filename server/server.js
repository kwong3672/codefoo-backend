var express = require('express');
var bodyParser = require('body-parser');
var ignAPI = require('./utilities/ignAPI');
var queryDB = require('./utilities/queryDB').queryDB;

var app = express();
var port = 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Node Server Running on Port: ' + port);
});

app.get('/videos', function (req, res) {
  queryDB(req, res, 'videos');
});

app.get('/articles', function (req, res) {
  queryDB(req, res, 'articles');
});
 
app.listen(port, function () {
  console.log('Node Server running on port', 3000);
});
