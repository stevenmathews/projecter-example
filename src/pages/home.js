import React from 'react'

export default React.createClass({
  displayName: 'HomePage',

  render () {
    return (
      <div className='content'>
        <a className='github-link' href='https://github.com/stevenmathews/projecter' target='_blank'>
          <h2>Base for new projects to save time</h2>
          <div className='github-logo'></div>
        </a>
        <ul>
          <li>
            <a href='https://webpack.github.io/' target='_blank'>
              <h4>Webpack</h4>
              <p>Helpers/presets for setting up webpack with hotloading react and ES6(2015) using Babel.</p>
            </a>
          </li>
          <li>
            <a href='https://karma-runner.github.io/' target='_blank'>
              <h4>Karma</h4>
              <p>Test runner that allows you to execute JavaScript code in multiple real browsers.</p>
            </a>
          </li>
          <li>
            <a href='https://travis-ci.org/' target='_blank'>
              <h4>Travis</h4>
              <p>Hosted continuous integration and deployment system.</p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
})
