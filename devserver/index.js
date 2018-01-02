var master = require('../master');
var spawn = require('child_process').spawn;

require('./rollup');
require('./browser-sync');
require('./readline');

spawn('nodemon', '-q --config server.nodemon.json server'.split(' '), {
  stdio: 'inherit'
});

console.log('[devserver] [browser-sync]');
