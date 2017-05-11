// Libs
import React from 'react'

// Components
import DiaryItem from "./Diary/DiaryItem"

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
      <DiaryItem data={this.state.results} update={this.handleUpdate} />
    )
  }
}
