// Libs
import React from "react"

// Helpers
import helpers from "../../../utils/helpers"

export default class EditForm extends React.Component {

  constructor() {
    super()

    this.handlePerformUpdate = this.handlePerformUpdate.bind(this)
    this.handleMovieUpdate = this.handleMovieUpdate.bind(this)
  }

  handleMovieUpdate(movie) {
    helpers.updateMovie(movie).then(data => {
      this.props.updateState(data)
    })
  }

  handlePerformUpdate() {

    this.handleMovieUpdate({
      _id: this.props.editing,
      Title: this.refs[ `Title_${ this.props.movie._id }` ].value,
      Genre: this.refs[ `Genre_${ this.props.movie._id }` ].value,
      Actors: this.refs[ `Actors_${ this.props.movie._id }` ].value,
      Year: this.refs[ `Year_${ this.props.movie._id }` ].value,
      Rating: this.refs[ `Rating_${ this.props.movie._id }` ].value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className='pull-left'>
            <h2>Title: </h2>
            <input type='text' className="form-control" ref={ `Title_${ this.props.movie._id }` } name="Title" defaultValue={ this.props.movie.Title } />
            <h4>Genre: </h4>
            <input type='text' className="form-control" ref={ `Genre_${ this.props.movie._id }` } name="Genre" defaultValue={ this.props.movie.Genre} />
            <h4>Actors: </h4>
            <input type='text' className="form-control" ref={ `Actors_${ this.props.movie._id }` } name="Actors" defaultValue={ this.props.movie.Actors } />
            <h4>Year: </h4>
            <input type='text' className="form-control" ref={ `Year_${ this.props.movie._id }` } name="Year" defaultValue={ this.props.movie.Year } />
            <h4>Rating: </h4>
            <input type='text' className="form-control" ref={ `Rating_${ this.props.movie._id }` } name="Rating" defaultValue={ this.props.movie.Rating } />
            <button
              className="btn btn-warning"
              type="submit"
              onClick={this.handlePerformUpdate}
            >
              Update Movie
            </button>
          </div>
        </div>
      </div>
    )
  }
}
