// Libs
import React from "react"

// Helpers
import helpers from "../../../../utils/helpers"

export default class EditMovieButton extends React.Component {

  constructor() {
    super()

    this.handleMovieId = this.handleMovieId.bind(this)
  }

  handleMovieId(props) {
    this.props.idToEdit(this.props.movieId)
  }

  render() {
    return (
      <button
        className="btn btn-success"
        type="submit"
         onClick={this.handleMovieId}
      >
        Edit Movie Info
      </button>
    )
  }
}
