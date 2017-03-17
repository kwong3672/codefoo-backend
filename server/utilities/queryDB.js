var cron = require('node-cron');
var Promise = require('bluebird');
var getSqlConnection = require('./mysql').getSqlConnection;
var createRSS = require('./createRSS').createRSS;

var queryDB = function (category) {
  var queryString = 'SELECT * FROM ' + category + ' LIMIT 10';
  Promise.using(getSqlConnection(), function(connection) {
    connection.queryAsync(queryString)
    .then(function(data) {
      createRSS(data, category);
    }).catch(function(err) {
      throw err;
    });
  });
};

// run every 1 minute query articles and video DB tables and create RSS feed
// would normally be larger interval like once an hour
// cron.schedule('*/1 * * * *', function () {
//   console.log('running function to query and create RSS feed every 5 minutes');
//   queryDB('articles');
//   queryDB('videos');
// });

queryDB('articles');
queryDB('videos');
