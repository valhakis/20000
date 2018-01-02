var express = require('express');
var app_controller = require('./app.controller');

var app = express();

app.use(app_controller['404']);

module.exports = app;
