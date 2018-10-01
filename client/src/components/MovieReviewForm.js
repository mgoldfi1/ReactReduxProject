import ReactDOM from 'react-dom';
import React, { Component } from 'react';



export default class MovieReviewForm extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      content: ""
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
  console.log(this.state)
}

  render() {
    return(
      <div>
      <div>Please Select A Movie To Review</div>
      <div>
        <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleSelect} name="movies">
          <option>Please Select A Movie</option>
          {this.props.movies.map(movie => <option value={movie.id} key={movie.id}>{movie.title}({movie.year})</option>)}
          </select><br/>
          <textarea rows="10" cols="30" name="review" onChange={this.handleContent} placeholder="Please write your review here." /><br/>
          <input type="submit" value="Post Review"/>
        </form>
      </div>
      </div>
    )
  }
}
