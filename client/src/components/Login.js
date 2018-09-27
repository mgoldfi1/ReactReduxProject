import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'

  class Login extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: ''
      }
    }
    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.logIn()
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="username" placeholder="Username" onChange={this.handleChange} /> <br />
            <input type="password" id="password" placeholder="Password" onChange={this.handleChange} /> <br />
            <input type="submit"  />
          </form>
        </div>
      )
    }
  }
  function mapDispatchToProps(dispatch){
    return { logIn: () => dispatch({type: "LOG_IN"})}
}

  export default connect(null, mapDispatchToProps)(Login)
