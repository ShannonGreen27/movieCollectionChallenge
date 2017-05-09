// Libs
import React from "react"

// Helpers
import helpers from "../../../utils/helpers"

export default class DeleteMovieButton extends React.Component {
 
  constructor() {
    super()

    this.handleDeleteMovie = this.handleDeleteMovie.bind(this)
  }

  handleDeleteMovie(props) {
     helpers.deleteMovieById(this.props.movieId).then(data => {

    })
  }

  render() {
    return (
      <button
        className="btn btn-danger"
        type="submit"
        onClick={this.handleDeleteMovie}
      >
        Remove from Library
      </button>
    )
  }
}
