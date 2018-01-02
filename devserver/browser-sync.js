var bs = require("browser-sync").create();

//<script id="__bs_script__">//<![CDATA[
//  document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.23.2'><\/script>".replace("HOST", location.hostname));
////]]></script>

bs.init({
  ui: false,
  logSnippet: false
});

bs.watch([
  master.root('client/register/*.html'),
  master.root('client/assets/**/*.{html,css,js}'),
  master.root('dist/**/*.js')
]).on('change', bs.reload);
