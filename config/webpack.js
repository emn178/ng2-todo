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
        loaders: ['ts', 'angular2-template']
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
      name: ['config', 'vendor'].reverse()
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      chunksSortMode: 'dependency'
    }),
    new DefinePlugin({
      ENV: JSON.stringify(ENV)
    }),
  ]
};

module.exports = config;
