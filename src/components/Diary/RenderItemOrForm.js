import React from "react"
import DiaryItem from "./RenderItemOrForm/DiaryItem"
import EditForm from "./RenderItemOrForm/EditForm"

export default class RenderItemOrForm extends React.Component {

  constructor() {
    super()
    this.state = {
      editing: null
    }

    this.toggleEditing = this.toggleEditing.bind(this)
    this.handleUpdatedState = this.handleUpdatedState.bind(this)
  }

  toggleEditing(movieId) {
    this.setState({
      editing: movieId
    })
  }

  handleUpdatedState(data) {
    this.props.update(data)
  }

  itemOrForm(movie) {
    if(this.state.editing === movie._id) {
      return (
        <EditForm key={movie._id} movie={movie} toggleEditing={this.toggleEditing} /> 
      )     
    } else {
      return (
        <DiaryItem key={movie._id} movie={movie} allowEdit={this.toggleEditing} updatedState={this.handleUpdatedState} />
      )
    }
  }

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
