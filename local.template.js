var mode = 'production';

if (!process.env.mode || process.env.mode === 'dev' || process.env.mode === 'development') {
  mode = 'development';
}

module.exports = {
  port: '20000',
  host: '0.0.0.0',
  mode: mode,
  mongo: {
    uri: 'mongodb://192.168.0.2:27017/20000'
  }
};
