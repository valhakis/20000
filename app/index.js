var express = require('express');
var session = require('express-session');
var app_controller = require('./app.controller');

var sessionOptions = {
  resave: false,
  saveUninitialized: false,
  secret: 'no secrets please'
};

var app = express();
app.use(session(sessionOptions));

app.get('/session/set-name/:name', app_controller.session_set_name);
app.get('/session', app_controller.show_session);

app.use(app_controller['404']);

module.exports = app;
