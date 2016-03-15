
// import './main.css'
import React from 'react'
import ReactDom from 'react-dom'
// import App from './components/App'
// import domready from 'domready'

// domready(function() {
//   const appDiv = document.createElement("div");
//   document.body.appendChild(appDiv);
//   ReactDom.render(<App />, appDiv)
// })

class HelloMessage extends React.Component{
  constructor() {
    super()
  }
  render () {
    return <div>Hi Anna, I work :D</div>
  }
}


//
// var HelloMessage = React.createClass({
//
// })

ReactDom.render(<HelloMessage/>, document.getElementById("app"))
