var User = master.require('server/db/models/user');

exports['404']= function(req, res) {
  res.status(404).send({
    method: req.method,
    code: 404,
    path: req.path,
    original_url: req.originalUrl,
    message: 'PAGE NOT FOUND'
  });
};

exports.show_session = function(req, res) {
  if (req.session.views) {
    req.session.views += 1;
  } else {
    req.session.views = 1;
  }
  res.send({
    message: 'I WANNA SHARE YOU MA SESSION',
    // session: req.session,
    views: req.session.views
  });
};

exports.session_set_name = function(req, res) {
  var name = req.params.name;
  if (name) {
    req.session.name = name;
  }
  res.send({
    views: req.session.views,
    session: req.session
  });
};

exports.render_register = function(req, res) {
  res.sendFile(master.root('client/src/register/index.html'));
};

exports.register_user = function(req, res) {
  var newUser = new User();
  newUser.email = req.body.email;
  newUser.password = newUser.hashPassword(req.body.password);
  newUser.save(function(err, user) {
    if (err)
      return res.status(500).send(err);
    res.send(user);
  });
};

/* GET /login */
exports.login = function(req, res) {
  // req.session.user.email = req.body.email;
};

exports.logout = function(req, res) {
};


exports.render_events = function(req, res) {
  res.sendFile(master.root('client/src/events/index.html'));
};

exports.render_client_home = function(req, res) {
  res.sendFile(master.root('client/src/home/index.html'));
};

exports.render_home = function(req, res) {
  res.sendFile(master.root('home/index.html'));
};

exports.render_rollup = function(req, res) {
  res.sendFile(master.root('rollup/index.html'));
};
