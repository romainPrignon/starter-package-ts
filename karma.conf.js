module.exports = function(config) {
  config.set({
    // testing framework
    frameworks: ['jasmine'],

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    // files to includes
    files: [
      '*.js'
    ],

    // list of files to exclude
    exclude: [ ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    plugins: [
      'karma-jasmine'
    ],

    /*
     * preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: {
      '**/*.js': ['sourcemap']
    },
  })
};

