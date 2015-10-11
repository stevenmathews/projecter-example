require('babel/register')
var getConfig = require('hjs-webpack')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var Layout = require('./src/layout')
var NotFoundPage = require('./src/pages/not-found')
var head = [
  '<title>Projecter</title>',
  '<link rel="shortcut icon" href="http://s12.postimg.org/xvnmsnyuh/favicon.png" type="image/x-icon"/>'
].join('')

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
    var layoutHtml = ReactDOMServer.renderToString(React.createElement(Layout))
    var notFoundHtml = ReactDOMServer.renderToString(React.createElement(NotFoundPage))
    return {
      'index.html': data.defaultTemplate({html: layoutHtml, head: head}),
      '200.html': data.defaultTemplate({html: notFoundHtml})
    }
  }
})
