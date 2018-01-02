exports['404']= function(req, res) {
  res.status(404).send({
    method: req.method,
    code: 404,
    path: req.path,
    original_url: req.originalUrl,
    message: 'PAGE NOT FOUND'
  });
};
