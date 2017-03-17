var _ = require('lodash');
var Promise = require('bluebird');
var getSqlConnection = require('./mysql').getSqlConnection;

var insertDB = function (category, data) {
  console.log('*********insertDB function*************');
  var insertString = createInsertString(category, data);
  Promise.using(getSqlConnection(), function(connection) {
    connection.queryAsync(insertString)
    .catch(function(err) {
      throw err;
    });
  });
};

var createInsertString = function (category, data) {
  var insertString = [];

  _.forEach(data, function (articleOrVideo) {
    var columns = [];
    var columnData = [];
    _.forEach(articleOrVideo, function (heading, headingKey) {
      
      if (!Array.isArray(heading)) {
        _.forEach(heading, function (metadata, metadataKey) {
          
          if (!Array.isArray(metadata)) {
            columnData.push(JSON.stringify(metadata));
          } else {
            columnData.push(JSON.stringify(JSON.stringify(metadata)));
          }

          columns.push(metadataKey);
          
        });
      } else {
        columns.push(headingKey);
        columnData.push(JSON.stringify(JSON.stringify(heading)));
      }

    });

    insertString += 'INSERT INTO ' + category + ' (' + columns + ') VALUES (' + columnData + '); ';

  });
    
  return insertString;

};


module.exports.insertDB = insertDB;
