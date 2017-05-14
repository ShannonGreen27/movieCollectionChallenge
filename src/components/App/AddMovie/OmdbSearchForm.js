import React from "react"

export default class OmdbSearchForm extends React.Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }

    // Must use bind this or the methods created will refer to the react object and not the class you created
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // manipulates the the input field to show what is being typed
  handleChange(event) {
    this.setState({
      text: event.target.value      
    })
  }

  // prevents the default behavior of a form to reload the page.
  // passes the state of this component up via props
  // resets the state of this component
  handleSubmit(event) {
    event.preventDefault()

    this.props.movieTitle(this.state.text)
    this.setState({ 
      text: "" 
    })
  }

  // renders a form
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Movie Title Search</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleSubmit}>
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
