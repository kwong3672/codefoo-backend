var insertDB = require('./insertDB').insertDB;

console.log('loading ignAPI file');

var jsonp = require('node-jsonp');

var url = 'http://ign-apis.herokuapp.com/';
var apiData = {};
var categories = ['articles', 'videos'];
var startIndex = 0;
var count = 10;

var generateQueryString = function (url, category, startIndex, count) {
  return url + category + '?startIndex=' + startIndex + '&count=' + count;
};

categories.forEach(function (category, idx) {
  var apiUrl = generateQueryString(url, category, startIndex, count);

  // may need to use to promises depending on how data will be used (async)
  jsonp(apiUrl, function (response) {
    apiData[category] = response.data;
    console.log('retrieved api : ' + category);
    insertDB(category, response.data);
  });
});
