var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var helper = require('./helper');

var config = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helper.root('src')
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template'],
        exclude: /\.(e2e)\.ts$/
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
        loaders: ['css-to-string', 'css', 'sass']
      }
    ],
    postLoaders: [
      {
        test: /\.(js|ts)$/, loader: 'istanbul-instrumenter',
        include: helper.root('src'),
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/,
          /src\/test/
        ]
      }
    ]
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  ts: {
    compilerOptions: {
      inlineSourceMap: true,
      sourceMap: false
    }
  },

  plugins: [
    new DefinePlugin({
      __NODE_ENV__: JSON.stringify(ENV.NODE_ENV)
    }),
  ]
};

module.exports = config;
