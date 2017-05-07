import React from 'react'
import OmdbSearchForm from "./AddMovie/OmdbSearchForm"

export default class Diary extends React.Component {

  constructor() {
    super()
    this.state = {
      result: ''
    }
  }

//Turn result into a components to render results to screen or show a message if nothing was found
componentWillMount(props) {
  this.setState({
    result: this.props.movies
  })
}


  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel-body">
          {/*<img className='pull-left' src={this.state.result.Poster}/>*/}
              <div className='pull-left'>
              <h2>Title: {this.state.result.Title}</h2>
              <h4>Genre: {this.state.result.Genre}</h4>
              <h4>Actors: {this.state.result.Actors}</h4>
              <h4>Year: {this.state.result.Year}</h4>
              <h4>Rating: {this.state.result.imdbRating}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
