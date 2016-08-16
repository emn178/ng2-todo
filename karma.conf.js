// Karma configuration
// Generated on Wed Jul 13 2016 14:36:01 GMT+0800 (CST)
process.env.NODE_ENV = process.env.NODE_ENV || 'test';

module.exports = function(config) {
  var reports = ['spec'],
    browsers = ['PhantomJS'];

  if (process.env.HTML_REPORT == '1') {
    reports.push('html');
    reports.push('coverage');
  }

  if (process.env.ALL_BROWSERS == '1') {
    browsers.push('Chrome');
  }

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      'src/test.ts',
      '**/*.spec.ts'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/test.ts': ['webpack'],
      '**/*.spec.ts': ['webpack']
    },

    webpack: require('./webpack.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: reports,

    specReporter: {
      maxLogLines: 5,        // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: false,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },

    htmlReporter: {
      outputFile: 'reports/result/index.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },

    coverageReporter: {
      dir: 'reports/coverage/',
      reporters: [
        {
          type: 'json',
          subdir: '.',
          file: 'coverage-final.json'
        }
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: browsers,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
