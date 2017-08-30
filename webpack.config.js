'use strict';
const path = require('path')

const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './browser/main.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    modules: [
      'node_modules',

    ],
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'browser')
        ],
        loader: 'babel-loader',
        options: {
          presets: [ 'react', 'es2015', 'stage-1', 'stage-2', 'stage-3' ]
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      },
      parallel: {
        cache: true,
      },
      sourceMap: true
    }),
  ]
};
