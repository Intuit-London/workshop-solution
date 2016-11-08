var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
     entry: APP_DIR + '/index.js',
     output: {
         path: BUILD_DIR,
         filename: 'app.bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query:{ presets:["es2015","react"] }
           },
           {
            test: /\.html$/,
            loader: 'html'
           }
         ]
     },
     plugins: [
        new HtmlWebpackPlugin({
          title: 'Chapter03',
          template: 'src/index.html'
        })
    ]
 };
