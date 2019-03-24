//entry point (source file)
const path = require('path');//built in node function

module.exports = {
  entry:"./src/app.js",
  output: {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js'//file where everything about js runs n exist
  },
  module:{
    rules:[{
      loader: "babel-loader",
      test: /\.js$/,
      exclude:/node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer:{
    contentBase:path.join(__dirname,'public'),
    historyApiFallback: true
  }
};
//loader
