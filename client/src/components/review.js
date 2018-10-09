import React, { Component } from 'react';


export default class Review extends Component {

render() {

  return (
    <div><strong>Review of {this.props.movies.find(mov => mov.id === this.props.review.movie_id).title}({this.props.movies.find(mov => mov.id === this.props.review.movie_id).year})</strong><p>{this.props.review.content}</p></div> 
  )

}

}
