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
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template'],
        exclude: /\.(spec|e2e)\.ts$/
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.pug$/,
        loaders: ['html', 'val', 'pug-html']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },

      // assets
      {
        test: /\.s?css$/,
        exclude: helper.root('src/app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
      },

      // components
      {
        test: /\.s?css$/,
        include: helper.root('src/app'),
        loaders: ['css-to-string-loader', 'css', 'sass']
      }
    ]
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'].reverse()
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      chunksSortMode: 'dependency'
    }),
    new DefinePlugin({
      __NODE_ENV__: JSON.stringify(ENV.NODE_ENV)
    }),
  ]
};

module.exports = config;
