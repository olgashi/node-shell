const request = require('request');
const curl = url => {
  request(url, function(error, response, body) {
    console.log('error:', error);
    console.log('body:', body);
  });
};
module.exports = curl;
