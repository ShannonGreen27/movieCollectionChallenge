// Libs
import React from "react"

// Components
import OmdbSearchForm from "./AddMovie/OmdbSearchForm"

// Helpers
import helpers from "../../utils/helpers"

export default class AddMovie extends React.Component {

  constructor() {
    super()
    this.state = {
      result: '',
      movieAdded: false,
      error: 'No Results Found'
    }

    // Must use bind this or the methods created will refer to the react object and not the class you created
    this.handleOmdbSubmit = this.handleOmdbSubmit.bind(this)
    this.handleAddMovie = this.handleAddMovie.bind(this)
  }

  // calls helper that makes a call to omdb
  handleOmdbSubmit(searchTerm) {
    helpers.getMovieByName(searchTerm).then(data => {
      this.setState({
        result: data.data,
        movieAdded: false
      })
    })
  }

  // calls helper that adds a new movie to the database
  // if there is a responce by the helper it sets the value of movie added to true
  // with a movieAdded set to true a message is displayed to let the user know that the movie was added.
  handleAddMovie() {
    helpers.addMovie(this.state.result).then(data => {
      this.setState({
        movieAdded: data
      })
    })
  }

  // Renders the movie data
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel-body">
            <OmdbSearchForm movieTitle={this.handleOmdbSubmit}/>
            {this.state.result==="" || this.state.result.Error ? "" : (
              <div>
                <img className='pull-left' src={this.state.result.Poster}/>
                <div className='pull-left'>
                  <h2>Title: {this.state.result.Title}</h2>
                  <h4>Genre: {this.state.result.Genre}</h4>
                  <h4>Actors: {this.state.result.Actors}</h4>
                  <h4>Year: {this.state.result.Year}</h4>
                  <h4>Rating: {this.state.result.imdbRating}</h4>
                  <br/>
                  <br/>
                  <h4>{this.state.movieAdded ? `${this.state.result.Title} was added to your library` : ''}</h4>
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={this.handleAddMovie}
                >
                  Add To Diary
                </button>
              </div>
            )}
            {this.state.result.Error ? (
              <div>
                <div className='pull-left'>
                  <h2>{this.state.error}</h2>
                </div>
              </div>) : ''
            }
          </div>
        </div>
      </div>
    )
  }
}
