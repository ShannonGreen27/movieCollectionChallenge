import React from "react"
import Form from "./Movie/Form"
import helpers from "../utils/helpers"

export default class Movie extends React.Component {

  constructor() {
    super()
    this.state = {
      result: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(searchTerm) {
    helpers.getMovieByName(searchTerm).then(data => {
      this.setState({
        result: data.data
      })
    }).bind(this)
  }



//Turn result into a components to render results to screen or show a message if nothing was found




  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Movie Search</h3>
            </div>
            <div className="panel-body">
              <Form movieTitle={this.handleSubmit}/>
              <h2>Title: {this.state.result.Title}</h2>
              <h4>Genre: {this.state.result.Genre}</h4>
              <h4>Actors: {this.state.result.Actors}</h4>
              <h4>Year: {this.state.result.Year}</h4>
              <h4>Rating: {this.state.result.imdbRating}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
