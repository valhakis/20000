var master = require('../master');
var local = master.require('local');
var http = require('http');
var readline = master.require('shared/readline');

var port = local.port || '20000'; 
var host = local.host || '0.0.0.0';

var db = require('./db');
var app = master.require('app');
var server = http.createServer(app);
var mode = local.mode;

server.listen(port, host, function() {
  console.log(`Server started at 'http://${host}:${port}' [${mode}].`);
});
