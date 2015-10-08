import React from 'react'

export default React.createClass({
  displayName: 'Layout',

  render () {
    return (
      <div>
        <header className='header'>
          <a href='/'>
            <div className='logo'></div>
            <h1 className='title'>Projecter.js</h1>
          </a>
          <nav>
            <a className='nav button-outlined' href='/'>Home</a>
            <a className='nav button-outlined' href='/contact'>Contact</a>
          </nav>
        </header>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
