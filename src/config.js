var configs = {
  scss: {
    config: {
      baseDir: Elixir.config.assetsPath + '/sass',
      src: '**/*.scss'
    },
    opts: {
      ignorePath: ''
    }
  },
  php: {
    config: {
      baseDir: Elixir.config.viewPath,
      src: '**/*.php'
    },
    opts: {
      ignorePath: /(\..\/)*(public)?/,
      fileTypes: {
        php: {
          block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
          detect: {
            js: /<script.*src=['"]([^'"]+)/gi,
            css: /<link.*href=['"]([^'"]+)/gi
          },
          replace: {
            js: '<script src="{{filePath}}"></script>',
            css: '<link rel="stylesheet" href="{{filePath}}" />'
          }
        }
      }
    }
  },
  njk: {
    config: {
      baseDir: Elixir.config.viewPath,
      src: '**/*.njk'
    },
    opts: {
      ignorePath: /(\..\/)*(public)?/,
      fileTypes: {
        php: {
          block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
          detect: {
            js: /<script.*src=['"]([^'"]+)/gi,
            css: /<link.*href=['"]([^'"]+)/gi
          },
          replace: {
            js: '<script src="{{filePath}}"></script>',
            css: '<link rel="stylesheet" href="{{filePath}}" />'
          }
        }
      }
    }
  }
};

module.exports = configs;
