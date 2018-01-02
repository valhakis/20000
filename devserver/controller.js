const webpack = require('webpack');
const compiler = webpack(master.require('home.webpack.config'));

exports.start_home_dev = function() {
  console.log('HAVE TO START HOME DEV');
  const watching = compiler.watch({

  }, (err, stats) => {
    console.log(stats.toString({
      colors: true
    }));
  });
};
