import React from 'react'
import createHtmlString from './create-html-string'
import Layout from '../layout'
import NotFound from '../pages/not-found'
import Home from '../pages/home'
const HomeElement = React.createElement(Home)
const home = createHtmlString(Layout, {children: HomeElement})
const notFound = createHtmlString(NotFound)
const head = `<title>Projecter</title>
              <link rel="shortcut icon"
                    href="http://s12.postimg.org/xvnmsnyuh/favicon.png"
                    type="image/x-icon"/>`

export default function htmlToPrerender (context) {
  return {
    'index.html': context.defaultTemplate({html: home, head: head}),
    '200.html': context.defaultTemplate({html: notFound})
  }
}
