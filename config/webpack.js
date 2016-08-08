var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var helper = require('./helper');

var config = {
  entry: {
    vendor: './src/vendor.ts',
    main: './src/main.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helper.root('src')
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: helper.root('dist')
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helper.root('src/app'),
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        include: helper.root('src/app'),
        loaders: ['to-string-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['config', 'vendor'].reverse()
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      chunksSortMode: 'dependency'
    }),
    new DefinePlugin({
      ENV: JSON.stringify({
        NODE_ENV: process.env.NODE_ENV
      })
    }),
  ]
};

module.exports = config;
