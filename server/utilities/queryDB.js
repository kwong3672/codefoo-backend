var db = require('./mysql').db;
var createRSS = require('./rss').createRSS;

var queryDB = function (req, res, category, count) {
  db.query('SELECT * FROM ' + category + ' LIMIT 5', function (err, data) {
    if (!err) {
      console.log('*******queryDB.js successful**********');
      // console.log(data);
      var xml = createRSS(data, category);

      res.redirect('/feeds/rss_' + category + '_feed.xml');
    } else {
      console.log('Error querying database');
      console.log(err);
    }
  });
};

module.exports.queryDB = queryDB;
