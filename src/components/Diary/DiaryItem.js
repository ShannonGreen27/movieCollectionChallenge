import React from "react"
import DeleteMovieButton from "./DiaryItem/DeleteMovieButton"

export default class DiaryItem extends React.Component {

  constructor() {
    super()
    this.state = {
      editing: null
    }

    this.handleNewState = this.handleNewState.bind(this)
    this.toggleEditing = this.toggleEditing.bind(this)
  }

  toggleEditing(movieId) {
    this.setState({
      editing: movieId
    })
  }

  handleNewState(data) {
    this.props.update(data)
  }

  renderItemOrEditField(movie) {
    if (this.state.editing === movie._id) {
      return (
        <div key={movie._id} className="row">
          <div className="col-sm-12">
            <div className='pull-left'>
              <h2>Title: </h2>
              <input type='text' className="form-control" ref={ `Title_${ movie._id }` } name="Title" defaultValue={ movie.Title } onClick={this.toggleEditing.bind(null, movie._id)} />
              <h4>Genre: {movie.Genre}</h4>
              <h4>Actors: {movie.Actors}</h4>
              <h4>Year: {movie.Year}</h4>
              <h4>Rating: {movie.Rating}</h4>
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
              <DeleteMovieButton movieId={movie._id} newState={this.handleNewState} />
            </div>
          </div>
        </div>
      )
    }
  }
      //   <li
      //   onClick={ this.toggleEditing.bind( null, item._id ) }
      //   key={ item._id }
      //   className="list-group-item">
      //   { `${ item.title } by ${ item.artist } (${ item.releaseYear })` }
      // </li>;

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
