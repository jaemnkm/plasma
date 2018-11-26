/* eslint-disable import/no-extraneous-dependencies, no-console */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const port = process.env.PORT || 8082;

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'Plasma',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader?modules&importLoaders=2&localIdentName=[path][local]__[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader?importLoaders=1&localIdentName=[path][local]__[hash:base64:5]',
          'resolve-url-loader',
        ],
      } ,
      {
        test: /\.(png|svg)$/,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: 'build',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
