var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var uri = master.local.mongo.uri;

mongoose.connect(uri);

