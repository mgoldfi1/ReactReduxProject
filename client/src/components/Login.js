import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginForm from './LoginForm'

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
      fetch('/api/users')
      .then(resp => resp.json())
      .then(json => console.log(json))
    }
    render() {
      return (
        <div>
          {this.props.loggedIn === false ? <LoginForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> : <div>NOT WORKING</div>}
        </div>
      )
    }
  }

function mapDispatchToProps(dispatch){
    return { logIn: () => dispatch({type: "LOG_IN"})}
}

const mapStateToProps = state => {
  return {loggedIn: state.loggedIn}
}


  export default connect(mapStateToProps, mapDispatchToProps)(Login)
