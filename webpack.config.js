var path = require("path")

module.exports = {
  entry: path.join( __dirname, 'src', 'app.js' ),
  output: {
    path: path.join( __dirname, 'assets' ),
    filename: "bundle.js",
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      { 
        test: /\.pug$/, 
        loader: "pug" 
      }
    ]
  }
};