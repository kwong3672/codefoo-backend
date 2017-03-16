var _ = require('lodash');
var db = require('./mysql').db;


var insertDB = function (category, data) {
  console.log('*********insertDB function*************');

  // re-enable when after done.  disabling so does not add to many entries in database
  // db.query(createInsertString(category, data), function (err, results, fields) {
  //   if (!err) {
  //     console.log('mySQL Insert Successful');
  //   } else {
  //     console.log('!!!!!!!!!!!!!!!! ERROR inserting mySQL data');
  //     console.log(err);
  //   }
  // }); 

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
