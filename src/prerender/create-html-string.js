import React from 'react'
import ReactDOMServer from 'react-dom/server'

const addRootDiv = (elementString) => `<div id='root'>${elementString}</div>`
const createHtmlString = (component, props) => {
  const element = React.createElement(component, props)
  const elementString = ReactDOMServer.renderToString(element)
  return addRootDiv(elementString)
}

export default createHtmlString
