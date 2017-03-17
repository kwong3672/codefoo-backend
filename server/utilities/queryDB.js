var Promise = require('bluebird');
var getSqlConnection = require('./mysql').getSqlConnection;
var createRSS = require('./createRSS').createRSS;

var queryDB = function (category) {
  var queryString = 'SELECT * FROM ' + category + ' LIMIT 10';
  return Promise.using(getSqlConnection(), function(connection) {
    return connection.queryAsync(queryString)
    .then(function(data) {
      console.log('Query of ' + category + ' successful');
      return data;
    }).catch(function(err) {
      throw err;
    });
  });
};

module.exports.queryDB = queryDB;
