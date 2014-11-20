#!/usr/bin/env node
var debug = require('debug')('skinit');
var app = require('./server');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

var app = require('./server');

