/*******

  Common helper functions for node/gulp

*******/

var config = require('./env.json');

var common = {

  config: function (){
      var env = process.env.ENVIRONMENT || 'development';
      return config[env];
    }
};

module.exports = common;
