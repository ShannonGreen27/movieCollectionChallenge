// Libs
import React from 'react'

// Components
import RenderItemOrForm from "./Diary/RenderItemOrForm"

// Helpers
import helpers from "../utils/helpers"

export default class Diary extends React.Component {

  constructor() {
    super()
    this.state = {
      results: []
    }

    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    helpers.populateMovieDiary()
      .then(result => {
        this.setState({ 
          results: result.data
        })
      })
  }

  handleUpdate(data) {
    this.setState({ 
      results: data.data
    })
  }

//Turn result into a components to render results to screen or show a message if nothing was found


  render() {
    return (
      <div>
        <RenderItemOrForm data={this.state.results} update={this.handleUpdate} />
      </div>
    )
  }
}
