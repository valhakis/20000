var readline = require('readline');
var User = master.require('server/db/models/user');
var user_controller = require('./user.controller');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('day is red?', function(answer) {
//   console.log(`Thank you for '${answer}'.`);
//   rl.close();
// });

rl.on('line', function(input) {
  if (input == 'clear') {
    process.stdout.write('\033c'); /* clear terminal */
  }
  if (input == 'server create user') {
    console.log('I HAVE TO CREATE A USER');
  }
  if (input == 'server users') {
    user_controller.list_users();
  }
  if (input == 'server create user') {
    user_controller.create_user();
  }
  var arguments = input.split(' ');
  if (arguments.length == 3) {

  }
  // console.log(arguments.length, arguments);
});
