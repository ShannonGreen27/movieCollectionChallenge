import React from "react"
import DeleteMovieButton from "./DiaryItem/DeleteMovieButton"
import EditMovieButton from "./DiaryItem/EditMovieButton"

export default class DiaryItem extends React.Component {

  constructor() {
    super()

    this.handleAllowEdit = this.handleAllowEdit.bind(this)
    this.handleNewState = this.handleNewState.bind(this)
  }

  handleNewState(data) {
    this.props.updatedState(data)
  }

  handleAllowEdit(itemId) {
    this.props.allowEdit(itemId)
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className='pull-left'>
            <h2>Title: {this.props.movie.Title}</h2>
            <h4>Genre: {this.props.movie.Genre}</h4>
            <h4>Actors: {this.props.movie.Actors}</h4>
            <h4>Year: {this.props.movie.Year}</h4>
            <h4>Rating: {this.props.movie.Rating}</h4>
            <EditMovieButton movieId={this.props.movie._id} idToEdit={this.handleAllowEdit} />
            <DeleteMovieButton movieId={this.props.movie._id} newState={this.handleNewState} />
          </div>
        </div>
      </div>
    )
  }
}