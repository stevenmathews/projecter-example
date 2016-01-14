import React from 'react'

class HomePage extends React.Component {
  render () {
    return (
      <div className='content'>
        <div className='summary'>
          <a className='github-link' href='https://github.com/stevenmathews/projecter' target='_blank'>
            <h2>Base for new projects to save time</h2>
            <div className='github-logo'></div>
          </a>
        </div>
        <div className='packages'>
          <div className='webpack'>
            <a href='https://webpack.github.io/' target='_blank'>
              <div className='webpack-logo'></div>
              <h4>Webpack</h4>
              <p>Configured with hotloading react and ES6 using Babel</p>
            </a>
          </div>
          <div className='karma'>
            <a href='https://karma-runner.github.io/' target='_blank'>
              <div className='karma-logo'></div>
              <h4>Karma</h4>
              <p>Test runner executing JavaScript in multiple real browsers</p>
            </a>
          </div>
          <div className='travis'>
            <a href='https://travis-ci.org/' target='_blank'>
              <div className='travis-logo'></div>
              <h4>Travis</h4>
              <p>Hosted continuous integration and deployment system</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
