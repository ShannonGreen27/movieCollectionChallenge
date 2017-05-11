import React from "react"
import DeleteMovieButton from "./DiaryItem/DeleteMovieButton"

export default class DiaryItem extends React.Component {

  constructor() {
    super()

    this.handleNewState = this.handleNewState.bind(this)
  }

  handleNewState(data) {
    this.props.update(data)
  }

getInitialState() {
    return {
      editing: null
    };
  },
  toggleEditing( itemId ) {
    this.setState( { editing: itemId } );
  },
renderItemOrEditField( item ) {
    if ( this.state.editing === item._id ) {
      return <li key={ `editing-${ item._id }` } className="list-group-item">
        <GridRow>
          <GridColumn className="col-xs-12 col-sm-3">
            <input
              onKeyDown={ this.handleEditField }
              type="text"
              className="form-control"
              ref={ `title_${ item._id }` }
              name="title"
              defaultValue={ item.title }
            />
          </GridColumn>
          <GridColumn className="col-xs-12 col-sm-3">
            <input
              onKeyDown={ this.handleEditField }
              type="text"
              className="form-control"
              ref={ `artist_${ item._id }` }
              name="artist"
              defaultValue={ item.artist }
            />
          </GridColumn>
          <GridColumn className="col-xs-12 col-sm-3">
            <input
              onKeyDown={ this.handleEditField }
              type="text"
              className="form-control"
              ref={ `releaseYear_${ item._id }` }
              name="releaseYear"
              defaultValue={ item.releaseYear }
            />
          </GridColumn>
          <GridColumn className="col-xs-12 col-sm-3">
            <SuccessButton onClick={ this.handleEditItem } label="Update Item" />
          </GridColumn>
        </GridRow>
      </li>;
    } else {
      return <li
        onClick={ this.toggleEditing.bind( null, item._id ) }
        key={ item._id }
        className="list-group-item">
        { `${ item.title } by ${ item.artist } (${ item.releaseYear })` }
      </li>;
    }
  },
  render() {
    return <ul className="list-group">
      {this.props.items.map( ( item ) => {
        return this.renderItemOrEditField( item );
      })}
    </ul>;
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
            <DeleteMovieButton movieId={this.props.movie._id} newState={this.handleNewState}/>
          </div>
        </div>
      </div>    
    )
  }
}
