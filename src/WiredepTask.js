let gulpWiredep;

class WiredepTask extends Elixir.Task {
  constructor(name, paths, options) {
    super(name, null, paths);

    this.options = options;
  }

  loadDependencies() {
    gulpWiredep = require('wiredep').stream;
  }

  gulpTask() {
    return (
      gulp
        .src(this.src.path)
        .pipe(this.wiredep())
        .on('error', this.onError())
        .pipe(this.saveAs(gulp))
        .pipe(this.onSuccess())
    );
  }

  /**
   * Register file watchers.
   */
  registerWatchers() {
      this.watch('./bower.json')
  }

  wiredep() {
    this.recordStep('Starting Wiredep')

    return gulpWiredep(this.options)
  }

}

// export default WiredepTask;
module.exports = WiredepTask
