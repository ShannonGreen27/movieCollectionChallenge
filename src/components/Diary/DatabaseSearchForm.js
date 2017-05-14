// Libs
import React from "react"

// Helpers
import helpers from "../../utils/helpers"

export default class DatabaseSearchForm extends React.Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormatSubmit = this.handleFormatSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value      
    })
  }

  handleFormatSubmit(event) {
    event.preventDefault()

    let searchTerm = this.state.text
    let formattedSearchTerm = ''
    searchTerm = searchTerm.split(" ")

    for (let i = 0; i < searchTerm.length; i++) {
      if (formattedSearchTerm === '') {
        formattedSearchTerm = searchTerm[i].charAt(0).toUpperCase() + searchTerm[i].slice(1)
      } else {
        formattedSearchTerm = formattedSearchTerm + ' ' + searchTerm[i].charAt(0).toUpperCase() + searchTerm[i].slice(1)
      }
    }
    this.handleSubmit(formattedSearchTerm)
  }

  handleSubmit(searchTerm) {
    helpers.searchMovieDiary(searchTerm).then(data => {
      this.props.data(data)
      this.setState({ 
        text: "" 
      })
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Search your Library</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleFormatSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.text}
                    id="text"
                    onChange={this.handleChange}
                  />
                  <button
                    className="btn btn-primary"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
