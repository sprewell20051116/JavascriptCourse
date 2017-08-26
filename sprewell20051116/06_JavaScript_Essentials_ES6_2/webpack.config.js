const path = require('path');

module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // a regular expression that catches .js files
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'build'),
    inline: true
  }
}
