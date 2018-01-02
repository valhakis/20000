var express = require('express');
var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var app_controller = require('./app.controller');

var sessionOptions = {
  resave: false,
  saveUninitialized: false,
  secret: 'no secrets please'
};

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/dist/', express.static(master.root('dist')));
app.use('/client/dist', express.static(master.root('client/dist')));
app.use(session(sessionOptions));

app.get('/session/set-name/:name', app_controller.session_set_name);
app.get('/session', app_controller.show_session);

app.get('/register', app_controller.render_register);
app.post('/register', app_controller.register_user);

app.get('/', app_controller.render_home);
app.get('/events', app_controller.render_events);

app.get('/rollup', app_controller.render_rollup);

app.use(app_controller['404']);

module.exports = app;
