const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const host = 'localhost';
const port = 3000;

module.exports = {
  entry: [
    'babel-polyfill',
    `webpack-dev-server/client?http://${host}:${port}`,
    path.resolve(__dirname, 'examples/index'),
  ],
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    host,
    port,
    historyApiFallback: true,
    stats: 'minimal'
  },
};