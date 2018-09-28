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

      fetch('/api/users', {
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
    },
        method: "POST",
        body: JSON.stringify({user: this.state})
      })
      .then(resp => resp.json())
      .then(json => json.message ? this.props.message(json.message) : this.props.logIn() )

    }
    render() {
      return (
        <div>
          {this.props.loggedIn === false ? <LoginForm handleSubmit={this.handleSubmit} message={this.props.text}  handleChange={this.handleChange} /> : <div>NOT WORKING</div>}
        </div>
      )
    }
  }

function mapDispatchToProps(dispatch){
    return { logIn: () => (dispatch({type: "LOG_IN"})),
    message: (text) => dispatch({type: "MESSAGE", text: text })}
}

const mapStateToProps = state => {
  return {loggedIn: state.loggedIn,
          text: state.message}
}


  export default connect(mapStateToProps, mapDispatchToProps)(Login)
