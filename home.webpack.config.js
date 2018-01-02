const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: __dirname,
  devtool: 'eval',
  entry: './home/index.js',
  output: {
    filename: './dist/home.bundle.js'
  }
};

