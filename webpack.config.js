var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/app.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
};
