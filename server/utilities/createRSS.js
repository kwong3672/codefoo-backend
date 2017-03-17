var RSS = require('rss');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var _ = require('lodash');

var createRSS = function (data, category) {
  var feed = new RSS({
    description: 'Codefoo Project to create a backend project that read/writes to a mySQL database and serves a RSS feed.',
    site_url: 'http://localhost:3000',
    title: 'Codefoo 2017 Backend Project',
  });

  // create feed item for each article or video
  _.forEach(data, function (articleOrVideo) {
    feed.item({
      categories: [category],
      date: articleOrVideo.publishDate, 
      description: articleOrVideo.subheadline || articleOrVideo.description,
      title: articleOrVideo.headline || articleOrVideo.longTitle,
      url: '' || articleOrVideo.url
    });
  });

  var xml = feed.xml({indent: '  '});

  // save as xml files
  var rssFileName = './public/feeds/rss_' + category + '_feed.xml';
  fs.writeFileAsync(rssFileName, xml)
  .then(function() {
    console.log('Saved RSS files');
  }).catch(function(err) {
    throw err;
  });

  return xml;
  
};

module.exports.createRSS = createRSS;
