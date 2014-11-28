#!/usr/bin/env node
var common = require('./common');
var config = common.config();

var app = require('./server');
var port = config.server.port;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port);
});
