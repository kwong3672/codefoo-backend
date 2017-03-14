var mysql = require('mysql');
var fs = require('fs');


var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'codefoo_backend',
  multipleStatements: true
});

db.connect(function (err) {
  if (!err) {
    console.log('Connected to codefoo-backend');
    loadSchema();    
  } else {
    console.log('Error connecting database');
    console.log(err);    
  }
});

// db.end(function (err) {
//   if (!err) {
//     console.log('Connection to DB ended');
//   } else {
//     console.log('Error disconnecting database');
//     console.log(err);
//   }
// });

var loadSchema = function () {
  fs.readFile('./server/utilities/schema.sql', 'utf-8', function (err, data) {
    if (!err) {
      var schema = data;
      db.query(data, function (err, response) {
        if (!err) {
          console.log('Successfully queried database');
          console.log(response);
        } else {
          console.log('Error querying database');
          console.log(err);
        }
      });
    } else {
      console.log('Error reading file');
      console.log(err);
    }
  });
};

