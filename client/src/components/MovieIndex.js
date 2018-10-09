import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import Button from './button'


 class MovieIndex extends Component {

   constructor(props) {
     super(props);
     this.state = {
       reviews: []
     }
   }


   handleSelect = (event) => {
     let id = event.target.selectedOptions[0].value
     let movie = this.props.movies.find(movie => movie.id === parseInt(id))
     this.setState({reviews: movie.reviews})

   }



    render() {
      return (
        <div>
        <select onChange={this.handleSelect} name="movies">
          <option>Please Select A Movie</option>
          {this.props.movies.map(movie => <option value={movie.id} key={movie.id}>{movie.title}({movie.year})</option>)}
          </select><br/>
          {this.state.reviews.length > 0 ? <strong>Here are some recent reviews!</strong> : ""}
          <ul>
          {this.state.reviews.map(r => <li>{r.content} <Button  /> </li>)}
          </ul>
          </div>
      )
    }
}

const mapStateToProps = state => {
  return {loggedIn: state.loggedIn,
          movies: state.movies}
}

export default connect(mapStateToProps)(MovieIndex)
