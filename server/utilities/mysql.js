var Promise = require('bluebird');
var mysql = Promise.promisifyAll(require('mysql'));
var fs = Promise.promisifyAll(require('fs'));

Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'codefoo_backend',
  multipleStatements: true
});

var getSqlConnection = function () {
  return pool.getConnectionAsync().disposer(function (connection) {
    try {
      connection.release();
    } catch (err) {}
  });
};

var readSchema = function () {
  fs.readFileAsync('./server/utilities/schema.sql', 'utf-8')
  .then(function(schema) {
    loadSchema(schema);  
  }).catch(function(err) {
    throw err;
  });
};

var loadSchema = function (schema) {
  Promise.using(getSqlConnection(), function(connection) {
    connection.queryAsync(schema)
    .catch(function(err) {
      throw err;
    });
  });
};

readSchema();

module.exports.getSqlConnection = getSqlConnection;
