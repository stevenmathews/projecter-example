require('babel-core/register')
const getConfig = require('hjs-webpack')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Layout = require('./src/layout').default
const NotFound = require('./src/pages/not-found').default
const HomePage = require('./src/pages/home').default
const HomePageElement = React.createElement(HomePage)

const head = [
  '<title>Projecter</title>',
  '<link rel="shortcut icon" href="http://s12.postimg.org/xvnmsnyuh/favicon.png" type="image/x-icon"/>'
].join('')

const addRootDiv = (elementString) => `<div id='root'>${elementString}</div>`
const createHtmlString = (component, props) => {
  const element = React.createElement(component, props)
  const elementString = ReactDOMServer.renderToString(element)
  return addRootDiv(elementString)
}

module.exports = getConfig({
  // entry point for the app
  in: 'src/app.js',
  // Name or full path of output directory commonly named `www` or `public`.
  // This is where your fully static site should end up for simple deployment.
  out: 'public',
  // This will destroy and re-create your `out` folder before building so you
  // always get a fresh folder. Usually you want this but since it's destructive
  // we make it false by default.
  clearBeforeBuild: '!(images)',
  // Specifies whether we are in production or development to determine the
  // outcome of running webpack.
  isDev: process.env.NODE_ENV !== 'production',
  // Pre-render all known structural content for a Native Web App to static files.
  // Users get pixels on screen immediately, your JS takes over when downloaded.
  html: function (data) {
    const layoutHtml = createHtmlString(Layout, {children: HomePageElement})
    const notFoundHtml = createHtmlString(NotFound)
    return {
      'index.html': data.defaultTemplate({html: layoutHtml, head: head}),
      '200.html': data.defaultTemplate({html: notFoundHtml})
    }
  }
})
