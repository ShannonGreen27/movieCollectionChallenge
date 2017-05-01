import React from 'react'
import ReactDOM from 'react-dom'
import Movie from './Components/Movie'
// import Routes from './src/config/routes'
// import Main from './src/Main'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Movie />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))

