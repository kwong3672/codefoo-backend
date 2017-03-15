var db = require('./mysql').db;

var queryDB = function (req, res, category, count) {
  db.query('SELECT * FROM ' + category + ' LIMIT 5', function (err, data) {
    if (!err) {
      console.log('*******queryDB.js successful**********');
      // console.log(data);
      res.send(data);
    } else {
      console.log('Error querying database');
      console.log(err);
    }
  });
};

module.exports.queryDB = queryDB;





var sampleData = {
  id: 1,
  description: 'Pokemon originally introduced in Gold and Silver are joining the Pokemon GO roster beginning this week.',
  duration: 39,
  longTitle: 'Official Pokemon GO Johto Region Pokemon Trailer',
  name: 'Official Pokemon GO Johto Region Pokemon Trailer',
  networks: '["ign"]',
  publishDate: '2017-02-15T11:59:00+0000',
  slug: 'official-pokemon-go-johto-region-pokemon-trailer',
  state: 'published',
  url: 'http://www.ign.com/videos/2017/02/15/official-pokemon-go-johto-region-pokemon-trailer',
  tags: '["trailer"]',
  thumbnails: '[{"url":"http://assets1.ignimgs.com/thumbs/userUploaded/2017/2/15/t1280-14871368192461280w-1487159582027_compact.jpg","size":"compact","width":306,"height":172},{"url":"http://assets1.ignimgs.com/thumbs/userUploaded/2017/2/15/t1280-14871368192461280w-1487159582027_medium.jpg","size":"medium","width":466,"height":262},{"url":"http://assets1.ignimgs.com/thumbs/userUploaded/2017/2/15/t1280-14871368192461280w-1487159582027_large.jpg","size":"large","width":626,"height":352}]' 
};
