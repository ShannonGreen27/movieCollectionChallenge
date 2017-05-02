import React from "react"

export default class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value      
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.movieTitle(this.state.text)
    this.setState({ 
      text: "" 
    })
  }

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
