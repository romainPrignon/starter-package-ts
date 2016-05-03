module.exports = function (config) {
  config.set({
    // testing framework
    frameworks: ['jasmine'],

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    preprocessors: {
      'src/**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
      //"target": "es5",
      //"module": "commonjs",
      //"outDir": "dist",
      //"sourceMap": true,
      //"noEmitHelpers": true,
      //"noImplicitAny": true,
      //"suppressImplicitAnyIndexErrors": true,
      //"removeComments": false,
      //"noResolve": true,

      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },

    // files to includes
    files: [
      'spec/**/*.ts'
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
      'karma-jasmine',
      'karma-typescript-preprocessor'
    ],

    /*
     * preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    //preprocessors: {
    //  '**/*.js': ['sourcemap']
    //},
  })
};

