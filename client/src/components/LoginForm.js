import ReactDOM from 'react-dom';
import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" id="username" placeholder="Username" onChange={this.props.handleChange} /> <br />
        <input type="password" id="password" placeholder="Password" onChange={this.props.handleChange} /> <br />
        <input type="submit"  />
      </form>
      Wow!
      </div>
    )
  }
}
