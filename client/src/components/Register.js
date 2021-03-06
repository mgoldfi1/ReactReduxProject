import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import RegisterForm from './RegisterForm'
import MovieContainer from './MovieContainer'


  class Register extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        email: '',
        password_confirmation: ''
      }
    }
    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()

      fetch('/api/register', {
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
    },
        method: "POST",
        body: JSON.stringify({user: this.state})
      })
      .then(resp => resp.json())
      .then(json => json.message ? this.props.message(json.message) : this.props.logIn(json) )

    }
    render() {
      return (
        <div>
          {this.props.loggedIn === false ? <RegisterForm handleSubmit={this.handleSubmit} message={this.props.text}  handleChange={this.handleChange} /> : <MovieContainer movies={this.props.movies} loading={this.props.loading} user={this.props.user} />}
        </div>
      )
    }
  }

function mapDispatchToProps(dispatch){
    return { logIn: (user) => (dispatch({type: "LOG_IN", user: user})),
    message: (text) => dispatch({type: "MESSAGE", text: text })}
}

const mapStateToProps = state => {
  return {loggedIn: state.loggedIn,
          text: state.message,
          user: state.user,
          movies: state.movies,
          loading: state.loading}
}


  export default connect(mapStateToProps, mapDispatchToProps)(Register)
