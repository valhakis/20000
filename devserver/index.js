var bs = require("browser-sync").create().init({
  ui: false,
  logSnippet: false
});
var spawn = require('child_process').spawn;

//<script id="__bs_script__">//<![CDATA[
//  document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.23.2'><\/script>".replace("HOST", location.hostname));
////]]></script>


spawn('nodemon', '-q --config server.nodemon.json server'.split(' '), {
  stdio: 'inherit'
});

console.log('[devserver] [browser-sync]');
