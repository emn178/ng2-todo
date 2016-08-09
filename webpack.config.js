var ENV = require('./config/env');
var helper = require('./config/helper');
var file = helper.root('config/webpack.' + ENV.NODE_ENV + '.js');
module.exports = require(file);
