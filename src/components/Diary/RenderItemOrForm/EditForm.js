import React from "react"
import UpdateMovieButton from "./EditForm/UpdateMovieButton"

export default class EditForm extends React.Component {

  constructor() {
    super()
    this.state = {
      editing: null
    }

    // this.handleUpdate = this.handleUpdate.bind(this)
  }

  // toggleEditing(movieId) {
  //   this.setState({
  //     editing: movieId
  //   })
  // }

  // handleUpdate(data) {
  //   this.props.update(data)
  // }

  // handleGetUpdate(event) {
  //   let update = {}

  //     update._id = this.state.editing
  //     update[ event.target.name ] = event.target.value

  //     console.log(update)
  // }

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
            <UpdateMovieButton movieId={this.props.movie._id} changes={this.handleGetUpdate}/>
          </div>
        </div>
      </div>
    )
  }
}
