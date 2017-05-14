// Libs
import React from "react"

// Components
import DiaryItem from "./RenderItemOrForm/DiaryItem"
import EditForm from "./RenderItemOrForm/EditForm"

export default class RenderItemOrForm extends React.Component {

  constructor() {
    super()
    this.state = {
      editing: null
    }

    // Must use bind this or the methods created will refer to the react object and not the class you created
    this.toggleEditing = this.toggleEditing.bind(this)
    this.handleUpdateState = this.handleUpdateState.bind(this)
  }

  // Switches the state of the component form being editable or not.
  toggleEditing(movieId) {
    this.setState({
      editing: movieId
    })
  }

  // Fires a callback that passes data up to the top level component and resets the state of the component.
  handleUpdateState(data) {
    this.props.update(data)
    this.setState({
      editing: null
    })
  }

  // Renders and rerenders a different component based on whether the state of this component is null or is the id of the component to be edited 
  itemOrForm(movie) {
    if(this.state.editing === movie._id) {
      return (
        <EditForm key={`editing-${movie._id}`} updateState={this.handleUpdateState} movie={movie} editing={this.state.editing} /> 
      )     
    } else {
      return (
        <DiaryItem key={movie._id} movie={movie} allowEdit={this.toggleEditing} updateState={this.handleUpdateState} />
      )
    }
  }

  // maps the array of movies to the itemOrForm method
  render() {
    return (
      <div>
        {this.props.data.map(movie => {
          return this.itemOrForm(movie)
        })}
      </div>
    )
  }
}
