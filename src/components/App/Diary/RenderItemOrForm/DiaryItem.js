// Libs
import React from "react"

// Helpers
import helpers from "../../../../utils/helpers"

export default class DiaryItem extends React.Component {

  constructor() {
    super()

    // Must use bind this or the methods created will refer to the react object and not the class you created
    this.handleAllowEdit = this.handleAllowEdit.bind(this)
    this.handleDeleteMovie = this.handleDeleteMovie.bind(this)
  }

  //method that executes a callback to pass the id of the movie to be edited up 
  handleAllowEdit() {
    this.props.allowEdit(this.props.movie._id)
  }

  //method that executes the helper to delete the movie record from the database. callback passes up the new state 
  handleDeleteMovie() {
     helpers.deleteMovieById(this.props.movie._id).then(data => {
      this.props.updateState(data)
    })
  }

  //Renders the html with the relevant data withing tags
  render() {
    let Genre, Actors
    Genre = this.props.movie.Genre.join(", ")
    Actors = this.props.movie.Actors.join(", ")

    return (
      <div className="row">
        <div className="col-sm-12">
          <img className='pull-left' src={this.props.movie.Poster}/>
          <div className='pull-left'>
            <h2>Title: {this.props.movie.Title}</h2>
            <h4>Genre: {Genre}</h4>
            <h4>Actors: {Actors}</h4>
            <h4>Year: {this.props.movie.Year}</h4>
            <h4>Rating: {this.props.movie.Rating}</h4>
            <button
              className="btn btn-success"
              type="submit"
              onClick={this.handleAllowEdit}
            >
              Edit Movie Info
            </button>
            <button
              className="btn btn-danger"
              type="submit"
              onClick={this.handleDeleteMovie}
            >
              Remove from Library
            </button>
          </div>
        </div>
      </div>
    )
  }
}