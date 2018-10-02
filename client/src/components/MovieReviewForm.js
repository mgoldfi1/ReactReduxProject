import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'


 export default class MovieReviewForm extends Component {
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
  .then(json => {this.setState({review: json});
                  console.log(json)} )

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
        {this.state.review ? <div><strong>Review of {this.props.movies.find(mov => mov.id === this.state.review.movie_id).title}({this.props.movies.find(mov => mov.id === this.state.review.movie_id).year})</strong><p>{this.state.review.content}</p></div> : ""}
      </div>
    )
  }
}
