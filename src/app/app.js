import React from 'react'
import ReactDOM from 'react-dom'
import AddMovieToDiary from './Components/AddMovieToDiary'
// import Routes from './src/config/routes'
// import Main from './src/Main'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <AddMovieToDiary />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))

