var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'codefoo_backend'
});

db.connect(function (err) {
  if (!err) {
    console.log('Connected to codefoo-backend');    
  } else {
    console.log('Error connecting database');
    console.log(err);    
  }
});

db.end(function (err) {
  if (!err) {
    console.log('Connection to DB ended');
  } else {
    console.log('Error disconnecting database');
    console.log(err);
  }
});
