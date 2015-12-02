import React from 'react'
import app from 'ampersand-app'
import localLinks from 'local-links'

class NavHelper extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  onClick (event) {
    const pathname = localLinks.getLocalPathname(event)
    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  }

  render () {
    return (
      <div onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
}

export default NavHelper
