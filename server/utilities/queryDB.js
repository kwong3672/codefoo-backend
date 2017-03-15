var cron = require('node-cron');
var db = require('./mysql').db;
var createRSS = require('./rss').createRSS;

var queryDB = function (category) {
  db.query('SELECT * FROM ' + category + ' LIMIT 10', function (err, data) {
    if (!err) {
      console.log('*******queryDB.js successful**********');
      // console.log(data);
      var xml = createRSS(data, category);
    } else {
      console.log('Error querying database');
      throw err;
    }
  });
};

// run every 1 minute query articles and video DB tables and create RSS feed
// would normally be larger interval like once an hour
cron.schedule('*/1 * * * *', function () {
  console.log('running function to query and create RSS feed every 5 minutes');
  queryDB('articles');
  queryDB('videos');
});
