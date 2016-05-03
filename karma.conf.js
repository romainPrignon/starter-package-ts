module.exports = function (config) {
  config.set({
    // testing framework
    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-typescript-preprocessor'
    ],

    preprocessors: {
      '**/*.ts': ['typescript']
    },

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '.',

    files: [
      'src/**/*.ts',
      'spec/**/*.ts'
    ],

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    autoWatch: true,

    typescriptPreprocessor: {
      options: {
        "target": "es5",
        "module": "commonjs",
        "outDir": "dist",
        "sourceMap": true,
        "noEmitHelpers": true,
        "noImplicitAny": true,
        "suppressImplicitAnyIndexErrors": true,
        "removeComments": false
      },
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    }
  })
};

