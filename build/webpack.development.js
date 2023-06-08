var webpack = require('webpack')
  , {merge} = require('webpack-merge')
  , path = require('path')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , baseConfigs = require('./webpack.base')

module.exports = merge(baseConfigs, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index : './example/index.jsx'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './example'),
    },
    port: 5997,
    hot: true
  }
})