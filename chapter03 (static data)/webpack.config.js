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
     debug: true,
     devtool: 'source-map',
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
           },{
            test: /\.html$/,
            loader: 'html'
          },{
            test:  /\.css$/,
            include: /node_modules/,
            loader: 'style-loader!css-loader'
          },{
            test:  /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader?modules'
          },{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'
          },{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'
          },{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'
          },{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'
          },{
             test: /\.json$/,
             exclude: /node_modules/,
             loader: 'json-loader'
          }
         ]
     },
     plugins: [
        new HtmlWebpackPlugin({
          title: 'Chapter04',
          template: 'src/index.html'
        })
    ]
 };
