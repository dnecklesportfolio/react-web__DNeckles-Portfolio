/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './index.js',
  
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },

  devtool:'eval-source-map',

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {test: /\.css$/,
                exclude: /node_modules/,
                loader: ['style-loader', 'css-loader']},
      { test: /\.(jpg|png|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
      }}
    ]
  },
// add this line
plugins: [HtmlWebpackPluginConfig]
}
