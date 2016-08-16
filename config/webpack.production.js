var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
var config = require('./webpack');
config.plugins.push(new UglifyJsPlugin());
config.plugins.push(new DedupePlugin());

module.exports = config;
