'use strict'

import './style/main.styl'
import app from 'ampersand-app'
import Router from './router'

window.app = app

app.extend({
  init () {
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
