import React from "react"
import DeleteMovieButton from "./DiaryItem/DeleteMovieButton"
import EditMovieButton from "./DiaryItem/EditMovieButton"
import UpdateMovieButton from "./DiaryItem/UpdateMovieButton"

export default class DiaryItem extends React.Component {

  constructor() {
    super()
    this.state = {
      editing: null
    }

    this.handleUpdate = this.handleUpdate.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)   
  }

  toggleEditing(movieId) {
    this.setState({
      editing: movieId
    })
  }

  handleUpdate(data) {
    this.props.update(data)
  }

  renderItemOrEditField(movie) {
    if (this.state.editing === movie._id) {
      return (
        <div key={movie._id} className="row">
          <div className="col-sm-12">
            <div className='pull-left'>
              <h2>Title: </h2>
              <input type='text' className="form-control" ref={ `Title_${ movie._id }` } name="Title" defaultValue={ movie.Title } />
              <h4>Genre: </h4>
              <input type='text' className="form-control" ref={ `Genre_${ movie._id }` } name="Genre" defaultValue={ movie.Genre} />
              <h4>Actors: </h4>
              <input type='text' className="form-control" ref={ `Actors_${ movie._id }` } name="Actors" defaultValue={ movie.Actors } />
              <h4>Year: </h4>
              <input type='text' className="form-control" ref={ `Year_${ movie._id }` } name="Year" defaultValue={ movie.Year } />
              <h4>Rating: </h4>
              <input type='text' className="form-control" ref={ `Rating_${ movie._id }` } name="Rating" defaultValue={ movie.Rating } />
              <UpdateMovieButton movieId={movie._id} />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div key={movie._id} className="row">
          <div className="col-sm-12">
            <div className='pull-left'>
              <h2 onClick={this.toggleEditing.bind(null, movie._id)}>Title: {movie.Title}</h2>
              <h4>Genre: {movie.Genre}</h4>
              <h4>Actors: {movie.Actors}</h4>
              <h4>Year: {movie.Year}</h4>
              <h4>Rating: {movie.Rating}</h4>
              <EditMovieButton movieId={movie._id} allowEdit={this.toggleEditing} />
              <DeleteMovieButton movieId={movie._id} newState={this.handleUpdate} />
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.props.data.map(movie => {
          return this.renderItemOrEditField(movie)
        })}
      </div>
    )
  }
}
