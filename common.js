/*******

	Common helper functions for node/gulp

*******/

var config = require('./env.json');

var common = {

	config: function ()
		{
			return config;
		}
};

module.exports = common;