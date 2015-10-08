import Router from 'ampersand-router'
import React from 'react'
import HomePage from './pages/home'

export default Router.extend({
  routes: {
    '': 'home',
    'contact': 'contact'
  },

  home () {
    React.render(<HomePage/>, document.body)
  }
})