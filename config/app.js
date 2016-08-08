if (!global.app) {  
  var helper = require('./helper');

  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  console.log('Run in ' + process.env.NODE_ENV);

  var app = global.app = {
    env: {},
    webpack: {
      file: helper.root('config/webpack.' + process.env.NODE_ENV + '.js')
    }
  };
  app.env[process.env.NODE_ENV] = true;
}

module.exports = global.app;
