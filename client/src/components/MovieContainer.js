import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import MovieReviewForm from './MovieReviewForm'

function fetchMovies() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch('/api/movies')
      .then(resp => resp.json())
      .then(movies => dispatch({ type: 'ADD_MOVIES', movies: movies}));
  };
}

  class MovieContainer extends Component {

    render() {
      return(
        <div> Welcome {this.props.user.username}!
        <div>{this.props.loading ? "Loading..." : <MovieReviewForm movies={this.props.movies} /> }</div>
        </div>
      )
    }

    componentDidMount() {
      this.props.fetchMovies()
    }

 }


 function mapDispatchToProps(dispatch){
  return { fetchMovies: () => dispatch(fetchMovies()) }
}



export default connect(null, mapDispatchToProps)(MovieContainer)