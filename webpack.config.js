var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');


module.exports = {
  context: __dirname + '/src',
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/root.js",
  module: {
    loaders:[{
      test:/\.js?$/,
      exclude:/(node_modules)/,
      loader:'babel-loader',
      query: {
        presets:['react','es2015'],
        plugins:['react-html-attrs'],
      }
    },{
      test:/\.css$/, loader:'style-loader!css-loader'
      // loader:'style!css-loader?modules&iimportLoaders=1&localIndentName=[name]__[local]__[hash:base64:5]'
    }]
  },
  output:{
    path: __dirname + "/src",
    publicPath:"/src/",
    filename: "bundle.js"
  },
  plugins : debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
  ],
};
