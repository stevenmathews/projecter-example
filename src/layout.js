import React from 'react'
import NavHelper from './components/nav-helper'

export default React.createClass({
  displayName: 'Layout',

  render () {
    return (
      <NavHelper>
        <header className='header'>
          <a href='/'>
            <div className='logo'></div>
            <h1 className='title'>Projecter.js</h1>
          </a>
          <nav>
            <div className='button-group'>
              <a className='nav button-outlined' href='/'>Home</a>
              <a className='nav button-outlined' href='/contact'>Contact</a>
            </div>
          </nav>
        </header>
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
})
