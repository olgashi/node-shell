const fs = require('fs');
const cat = (filename, done) => {
  fs.readFile(filename, (error, data) => {
    if (error) {
      console.log('Error: ', error)
    } else {
      done(data);
    }
  });
};
module.exports = cat;
