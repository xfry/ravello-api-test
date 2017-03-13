const path = require("path");

module.exports = {
  entry: "./client/main.js",
  output: {
    path: __dirname + '/src',
    filename: 'index.min.js'
  },

  devServer: {
    contentBase: path.join(__dirname, "/client"),
    inline: true,
    port: 3333,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}