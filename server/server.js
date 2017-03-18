var express = require('express');

var app = express();
var port = 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Node Server Running on Port: ' + port);
});
 
app.listen(port, function () {
  console.log('Node Server running on port', 3000);
});
