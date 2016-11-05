const WiredepTask = require('./WiredepTask')

Elixir.extend(
  'wiredep',
  function(type, src, baseDir, options = {}) {
    const config = require('./config')
    src = src || config[type].config.src
    baseDir = baseDir || config[type].config.baseDir
    new WiredepTask(
      'wiredep', getPaths(src, baseDir), options
    );
  }
);

/**
 * Prep the Gulp src and output paths
 *
 * @param  {string|Array} src
 * @param  {string|null}  basDir
 * @param  {string|null}  output
 * @return {GulpPath}
 */
function getPaths(src, baseDir) {
  return new Elixir.GulpPaths()
    .src(src, baseDir)
    .output(baseDir);
}
