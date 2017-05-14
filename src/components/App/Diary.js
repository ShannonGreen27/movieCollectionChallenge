// Libs
import React from 'react'

// Components
import RenderItemOrForm from "./Diary/RenderItemOrForm"
import DatabaseSearchForm from "./Diary/DatabaseSearchForm"

// Helpers
import helpers from "../utils/helpers"

export default class Diary extends React.Component {

  constructor() {
    super()
    this.state = {
      results: []
    }

    // Must use bind this or the methods created will refer to the react object and not the class you created
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  // Once component is rendered to the page this will execute. Makes a call to the database to load in any movies in the users library
  componentDidMount() {
    helpers.populateMovieDiary()
      .then(result => {
        this.setState({ 
          results: result.data
        })
      })
  }

  // Takes care of any updates to the component
  handleUpdate(data) {
    this.setState({ 
      results: data.data
    })
  }

  // Renders components
  render() {
    return (
      <div>
        <DatabaseSearchForm data={this.handleUpdate} />
        <RenderItemOrForm data={this.state.results} update={this.handleUpdate} />
      </div>
    )
  }
}
