const path = require('path');

module.exports = {
  resolve (dir) {
    path.resolve(__dirname, dir);
  }
};
