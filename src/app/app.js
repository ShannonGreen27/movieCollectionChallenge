import React from 'react'
import ReactDOM from 'react-dom'
import AddMovie from './Components/AddMovie'
// import Routes from './src/config/routes'
// import Main from './src/Main'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <AddMovie />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))

