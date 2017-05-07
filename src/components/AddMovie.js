import React from "react"
import OmdbSearchForm from "./AddMovie/OmdbSearchForm"
import helpers from "../utils/helpers"
import Diary from "./Diary"

export default class AddMovie extends React.Component {

  constructor() {
    super()
    this.state = {
      result: ''
    }

    this.handleOmdbSubmit = this.handleOmdbSubmit.bind(this)
    this.handleAddMovie = this.handleAddMovie.bind(this)
  }

  handleOmdbSubmit(searchTerm) {
    helpers.getMovieByName(searchTerm).then(data => {
      this.setState({
        result: data.data
      })
    })
  }

  handleAddMovie() {
    helpers.addMovie(this.state.result).then(data => {
      <Diary movies={data} />
    })
  }

//Turn result into a components to render results to screen or show a message if nothing was found



  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel-body">
            <OmdbSearchForm movieTitle={this.handleOmdbSubmit}/>
            <img className='pull-left' src={this.state.result.Poster}/>
            <div className='pull-left'>
              <h2>Title: {this.state.result.Title}</h2>
              <h4>Genre: {this.state.result.Genre}</h4>
              <h4>Actors: {this.state.result.Actors}</h4>
              <h4>Year: {this.state.result.Year}</h4>
              <h4>Rating: {this.state.result.imdbRating}</h4>
            </div>
            {this.state.result==="" || this.state.result.Response === "False" ? "" : (
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.handleAddMovie}
              >
                Add To Diary
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
