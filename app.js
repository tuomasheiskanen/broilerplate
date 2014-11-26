#!/usr/bin/env node
var config = require('./config/config');

var debug = require('debug')(config.appName);
var app = require('./server').setup(config);

console.log(config.appName);

var port = config.server.port;

var server = app.listen(port, function() {
  debug('Express server listening on port ' + server.address().port);
});
