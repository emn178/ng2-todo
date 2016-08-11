var config = require('./webpack');
var helper = require('./helper');
config.devtool = 'cheap-module-eval-source-map';
config.devServer = {
  port: 3000,
  host: '0.0.0.0',
  historyApiFallback: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  outputPath: helper.root('dist')
};
module.exports = config;
