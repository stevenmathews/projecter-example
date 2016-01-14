// Karma configuration
'use strict'

const webpackConfigLoaders = require('./webpack.config.js').module.loaders

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // list of files / patterns to load in the browser
    files: [
      'test/test-index.js'
    ],
    // list of files to exclude
    exclude: [
    ],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/test-index.js': ['webpack', 'sourcemap']
    },
    // options for 'karma-webpack'
    webpack: {
      module: {
        loaders: webpackConfigLoaders // use the loaders from webpack.config.js
      },
      devtool: 'inline-source-map' // create source maps
    },
    webpackMiddleware: {
      noInfo: true // stop webpack from logging the build process to console
    },
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // continuous integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
