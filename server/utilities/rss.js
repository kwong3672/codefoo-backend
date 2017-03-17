// var RSS = require('rss');
// var fs = require('fs');
// var _ = require('lodash');

// var createRSS = function (data, category) {
//   var feed = new RSS({
//     description: 'Codefoo Project to create a backend project that read/writes to a mySQL database and serves a RSS feed.',
//     site_url: 'http://localhost:3000',
//     title: 'Codefoo 2017 Backend Project',
//   });

//   _.forEach(data, function (articleOrVideo) {
//     feed.item({
//       categories: [category],
//       date: articleOrVideo.publishDate, 
//       description: articleOrVideo.subheadline || articleOrVideo.description,
//       title: articleOrVideo.headline || articleOrVideo.longTitle,
//       url: '' || articleOrVideo.url
//     });
//   });


//   var xml = feed.xml({indent: '  '});

//   fs.writeFile('./public/feeds/rss_' + category + '_feed.xml', xml, function (err) {
//     if (!err) {
//       console.log('Saved rss file');
//     } else {
//       console.log(err);
//       throw err;
//     }
//   });

//   return xml;
  
// };

// module.exports.createRSS = createRSS;
