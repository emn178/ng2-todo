if (!global.ENV) {  
  var ENV = global.ENV = {
    NODE_ENV: process.env.NODE_ENV || 'development'
  };
  console.log('Run in ' + ENV.NODE_ENV);
}

module.exports = global.ENV;
