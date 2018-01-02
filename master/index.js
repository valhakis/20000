var path = require('path');
var _root = path.join(__dirname, '..');

var master = global.master = module.exports;

exports.require = function(location) {
  return require(path.join(_root, location));
};
