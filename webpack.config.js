var getConfig = require('hjs-webpack')
var layout = require('./src/pre-render/layout')
var head = require('./src/pre-render/head')
var notFound = require('./src/pre-render/not-found')

module.exports = getConfig({
  // entry point for the app
  in: 'src/app.js',
  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public',
  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: '!(images)',
  // Specifies whether we are in production or
  // development to determine the outcome of
  // running webpack
  isDev: process.env.NODE_ENV !== 'production',
  // Pre-render all known structural content for
  // a Native Web App to static files. Users get
  // pixels on the screen immediately, your JS
  // takes over when downloaded.
  html: function (data) {
    return {
      'index.html': data.defaultTemplate({html: layout, head: head}),
      '200.html': data.defaultTemplate({html: notFound})
    }
  }
})
