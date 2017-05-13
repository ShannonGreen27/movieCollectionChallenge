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
    this.handleUpdateState = this.handleUpdateState.bind(this)
  }

  toggleEditing(movieId) {
    this.setState({
      editing: movieId
    })
  }

  handleUpdateState(data) {
    this.props.update(data)
    this.setState({
      editing: null
    })
  }

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
