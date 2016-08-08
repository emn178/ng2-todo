var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var config = require('./webpack');
config.plugins.push(new UglifyJsPlugin());

module.exports = config;
