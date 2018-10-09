import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import MovieReviewForm from './MovieReviewForm'
import { fetchMovies } from '../actions/actionGenerator'




  class MovieContainer extends Component {

    render() {
      console.log(this.props.user)
      return(
        <div> <strong>Welcome {this.props.user.username}!</strong><br/>
        <div>{this.props.loading ? "Loading..." : <MovieReviewForm  user={this.props.user} movies={this.props.movies} /> }</div><br /><br />
        {this.props.user.movies.map(mov => <div key={mov.id}><strong>Review of {mov.title}({mov.year})</strong><p>{mov.reviews.find(rev => rev.user_id === this.props.user.id).content}</p></div>)}
        </div>
      )
    }



    componentDidMount() {
      this.props.fetchMovies()
    }

 }






export default connect(null, {fetchMovies})(MovieContainer)
