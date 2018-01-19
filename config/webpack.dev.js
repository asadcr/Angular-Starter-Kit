var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env':{
      'NODE_ENV': JSON.stringify('development'),
      //'API_URL': JSON.stringify('http://10.28.83.123/nb-legal/api/')
      'API_URL': JSON.stringify('http://localhost:51350/api/')
    }
  })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});