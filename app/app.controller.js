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
    session: req.session,
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
