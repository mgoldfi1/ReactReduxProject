import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import MovieContainer from './MovieContainer'
import handleLogIn from '../actions/actionGenerator'
import handleMessage from '../actions/actionGenerator'


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
      .then(json => this.props.logIn(json))
      .catch(error => this.props.message("Invalid Username Or Password"))

    }

    render() {
      console.log(this.props.loggedIn)
      return (
        <div>
          {this.props.loggedIn === false ? <LoginForm handleSubmit={this.handleSubmit} message={this.props.text}  handleChange={this.handleChange} /> : <MovieContainer reviews={this.props.reviews} movies={this.props.movies} loading={this.props.loading} user={this.props.user} />}
        </div>
      )
    }
  }

function mapDispatchToProps(dispatch){
    return { logIn: (user) => (dispatch(handleLogIn(user))),
    message: (text) => dispatch(handleMessage(text))}
}

const mapStateToProps = state => {
  return {loggedIn: state.loggedIn,
          text: state.message,
          user: state.user,
          movies: state.movies,
          loading: state.loading,
          reviews: state.reviews}
}


  export default connect(mapStateToProps, mapDispatchToProps)(Login)
