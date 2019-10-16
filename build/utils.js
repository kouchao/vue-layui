const path = require('path');

module.exports = {
  resolve (dir) {
    return path.resolve(__dirname, dir);
  }
};
