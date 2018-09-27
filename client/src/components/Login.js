import ReactDOM from 'react-dom';
import React, { Component } from 'react';


  export default class Login extends Component {
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
    render() {
      return (
        <div>
          <form>
            <input type="text" id="username" placeholder="Username" onChange={this.handleChange} /> <br />
            <input type="password" id="password" placeholder="Password" onchange={this.handleChange} /> <br />
            <input type="submit" />
          </form>
        </div>
      )
    }
  }
