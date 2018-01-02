var readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
var User = master.require('server/db/models/user');

exports.list_users = function() {
  process.stdout.write('\033c'); /* clear terminal */
  User.find(function(err, users) {
    if (err) 
      return console.log(err);
    console.log(users);
  });
};

exports.create_user = function() {
  process.stdout.write('\033c'); /* clear terminal */
  readline.question('email: ', function(email) {
    readline.question('pass: ', function(password) {
      var newUser = new User();
      newUser.email = email;
      newUser.password = newUser.hashPassword(password);
      newUser.save(function(err, user) {
        if (err) 
          return console.log(err);
        console.log(user);
      });
    });
  });
};
