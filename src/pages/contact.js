import React from 'react'

export default React.createClass({
  displayName: 'ContactPage',

  render () {
    return (
      <div>
        <h2>Contact</h2>
        <ul>
          <li>
            <a href='mailto:stevenmathews.nz@gmail.com' target='_blank'>
              <h4>Steve Mathews</h4>
            </a>
          </li>
        </ul>
      </div>
    )
  }
})
