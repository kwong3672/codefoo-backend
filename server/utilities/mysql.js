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
    console.log('Connected to database: codefoo-backend');
    // after connecting to DB load schema if tables does not exist
    loadSchema();    
  } else {
    console.log('Error connecting database');
    console.log(err);    
  }
});

var loadSchema = function () {
  fs.readFile('./server/utilities/schema.sql', 'utf-8', function (err, data) {
    if (!err) {
      var schema = data;
      db.query(data, function (err, response) {
        if (!err) {
          console.log('Successfully queried database');
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

// enable after determining when to end DB connection
// db.end(function (err) {
//   if (!err) {
//     console.log('Connection to DB ended');
//   } else {
//     console.log('Error disconnecting database');
//     console.log(err);
//   }
// });

module.exports.db = db;

