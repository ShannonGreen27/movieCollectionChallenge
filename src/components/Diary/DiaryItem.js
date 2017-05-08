import React from "react"

export default class DiaryItem extends React.Component {

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
          </div>
        </div>
      </div>    
    )
  }
}
