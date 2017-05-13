// Libs
import React from "react"

// Helpers
import helpers from "../../../../utils/helpers"

export default class UpdateMovieButton extends React.Component {

  constructor() {
    super()

    // this.handleUpdate = this.handleUpdate.bind(this)
  }

  // handleEditItem() {
  //   let itemId = this.state.editing;

  //   this.handleVinylUpdate({
  //     _id: itemId,
  //     title: this.refs[ `title_${ itemId }` ].value,
  //     artist: this.refs[ `artist_${ itemId }` ].value,
  //     releaseYear: this.refs[ `releaseYear_${ itemId }` ].value
  //   })
  // }

  // handleUpdate(event) {
  //   let update = {}

  //     update._id = this.props.movieId
  //     update[ event.target.name ] = event.target.value

  //     console.log(update)
  //     console.log(this.props.changes)

  // }

  render() {
    return (
      <button
        className="btn btn-warning"
        type="submit"
        onClick={this.props.changes}
      >
        Update Movie
      </button>
    )
  }
}
