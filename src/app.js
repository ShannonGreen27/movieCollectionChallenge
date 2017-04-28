import React from 'react'
import ReactDOM from 'react-dom'
// import Routes from './src/config/routes'
// import Main from './src/Main'

const css = require('./app.scss')

console.log("HI")

const App = React.createClass({
  render: function() {
    return (
          <h1>React App Starter Code!</h1>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"));

