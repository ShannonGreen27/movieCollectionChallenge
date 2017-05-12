// Libs
import React from "react"

// Helpers
import helpers from "../../../utils/helpers"

export default class EditMovieButton extends React.Component {

  constructor() {
    super()

    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(props) {
    this.props.allowEdit(this.props.movieId)
  }

  render() {
    return (
      <button
        className="btn btn-success"
        type="submit"
         onClick={this.handleEdit}
      >
        Edit Movie Info
      </button>
    )
  }
}
