import Router from 'ampersand-router'
import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './pages/home'
import ContactPage from './pages/contact'
import NotFoundPage from './pages/not-found'
import Layout from './layout'

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }
    ReactDOM.render(page, document.getElementById('root'))
  },

  routes: {
    '': 'home',
    'contact': 'contact',
    '*notFound': 'notFound'
  },

  home () {
    this.renderPage(<HomePage/>)
  },

  contact () {
    this.renderPage(<ContactPage/>)
  },

  notFound () {
    this.renderPage(<NotFoundPage/>)
  }
})
