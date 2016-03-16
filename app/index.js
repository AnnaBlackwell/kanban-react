
import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import domready from 'domready'
import 'array.prototype.findindex'

domready(function() {
  const appDiv = document.createElement("div");
  document.body.appendChild(appDiv);
  ReactDom.render(<App />, appDiv)
})
