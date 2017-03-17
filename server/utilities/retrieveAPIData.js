var insertDB = require('./insertDB').insertDB;
var jsonp = require('node-jsonp');

var jsonpGet = function () {
  var url = 'http://ign-apis.herokuapp.com/';
  var categories = ['articles', 'videos'];
  var startIndex = 0;
  var count = 10;

  categories.forEach(function (category) {
    var apiUrl = generateQueryString(url, category, startIndex, count);

    // may need to use to promises depending on how data will be used (async)
    jsonp(apiUrl, function (response) {
      console.log('retrieved api : ' + category);
      insertDB(category, response.data);
    });
  });
};

var generateQueryString = function (url, category, startIndex, count) {
  return url + category + '?startIndex=' + startIndex + '&count=' + count;
};

jsonpGet();
