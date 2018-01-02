var controller = require('./controller');

var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(input) {
  if (input === 'dev start home') {
    controller.start_home_dev();
  }
  if (input === 'dev watch home') {
    controller.start_home_dev();
  }
});
