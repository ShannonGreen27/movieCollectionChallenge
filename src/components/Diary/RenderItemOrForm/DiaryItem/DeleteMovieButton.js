// Libs
import React from "react"

// Helpers
import helpers from "../../../../utils/helpers"

export default class DeleteMovieButton extends React.Component {
 
  constructor() {
    super()

    this.handleDeleteMovie = this.handleDeleteMovie.bind(this)
  }

  handleDeleteMovie() {
     helpers.deleteMovieById(this.props.movieId).then(data => {
      this.props.newState(data)
      // console.log(data)
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
