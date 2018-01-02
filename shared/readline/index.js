var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('day is red?', function(answer) {
//   console.log(`Thank you for '${answer}'.`);
//   rl.close();
// });

rl.on('line', function(input) {
  if (input == 'server create user') {
    console.log('I HAVE TO CREATE A USER');
  }
  var arguments = input.split(' ');
  if (arguments.length == 3) {

  }
  console.log(arguments.length, arguments);
});
