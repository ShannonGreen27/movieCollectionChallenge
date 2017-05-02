import React from "react"
import Form from "./AddMovieToDiary/Form"
import helpers from "../utils/helpers"

export default class AddMovieToDiary extends React.Component {

  constructor() {
    super()
    this.state = {
      result: ''
    }

    this.handleQuerySubmit = this.handleQuerySubmit.bind(this)
  }

  handleQuerySubmit(searchTerm) {
    helpers.getMovieByName(searchTerm).then(data => {
      this.setState({
        result: data.data
      })
    })
  }



//Turn result into a components to render results to screen or show a message if nothing was found
            // <h2>Title: {this.state.result.Title}</h2>
            // <h4>Genre: {this.state.result.Genre}</h4>
            // <h4>Actors: {this.state.result.Actors}</h4>
            // <h4>Year: {this.state.result.Year}</h4>
            // <h4>Rating: {this.state.result.imdbRating}</h4>
            // <img src={this.state.result.Poster} alt="Poster for the movie"/>




  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel-body">
            <Form movieTitle={this.handleQuerySubmit}/>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.result.Title}
                  id="Title"
                />
                <input
                  type="hidden"
                  className="form-control"
                  value={this.state.result.Genre}
                  id="Genre"
                />
                <input
                  type="hidden"
                  className="form-control"
                  value={this.state.result.Actors}
                  id="Actors"
                />
                <input
                  type="hidden"
                  className="form-control"
                  value={this.state.result.Year}
                  id="Year"
                />
                <input
                  type="hidden"
                  className="form-control"
                  value={this.state.result.imdbRating}
                  id="Rating"
                />
                <input
                  type="hidden"
                  className="form-control"
                  value={this.state.result.Poster}
                  id="text"
                />
                {this.state.result==="" ? "" :
                (<button
                  className="btn btn-primary"
                  type="submit"
                >
                  Add To Diary
                </button>)}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
