import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postReview } from '../actions/actionGenerator'
import Review from './review'


  class MovieReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      content: "",
      review: ""
    }
  }
handleContent = (event) => {
  this.setState({content: event.target.value})
}

handleSelect = (event) => {
  this.setState({selected: event.target.selectedOptions[0].value})
}

handleSubmit = (event) => {
  event.preventDefault();
  fetch('/api/review', {
    headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
},
    method: "POST",
    body: JSON.stringify({review: {content: this.state.content, movie_id: this.state.selected, user_id: this.props.user.id}})
  })
  .then(resp => resp.json())
  .then(json => this.props.postReview(json))

}

  render() {
    return(
      <div>
      <div>
        <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleSelect} name="movies">
          <option>Please Select A Movie</option>
          {this.props.movies.map(movie => <option value={movie.id} key={movie.id}>{movie.title}({movie.year})</option>)}
          </select><br/>
          <textarea rows="10" cols="30" name="review" onChange={this.handleContent} placeholder="Please write your review here." required/><br/>
          <input type="submit" value="Post Review"/>
        </form>
      </div>
        {this.props.reviews.length > 0 ? this.props.reviews.map(rev => <Review review={rev} movies={this.props.movies} />) : ""}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {loggedIn: state.loggedIn,
          text: state.message,
          user: state.user,
          movies: state.movies,
          loading: state.loading,
          reviews: state.reviews}
}


export default connect(mapStateToProps, {postReview})(MovieReviewForm)
