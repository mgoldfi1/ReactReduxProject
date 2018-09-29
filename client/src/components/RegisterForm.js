import ReactDOM from 'react-dom';
import React, { Component } from 'react';


export default class RegisterFrom extends Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" id="email" placeholder="Email" onChange={this.props.handleChange} /> <br />
        <input type="text" id="username" placeholder="Username" onChange={this.props.handleChange} /> <br />
        <input type="password" id="password" placeholder="Password" onChange={this.props.handleChange} /> <br />
        <input type="password" id="password_confirmation" placeholder="Confirm Password" onChange={this.props.handleChange} /> <br />
        <input type="submit" value="Register"  />
      </form>
      <div style={{color: 'red'}}>{this.props.message.password_confirmation ? "Password and confirmation do not match" : ""}</div>
      <div style={{color: 'red'}}>{this.props.message.password ? "Password must be 6 characters or more." : ""}</div>
      <div style={{color: 'red'}}>{this.props.message.email ? "Email is already in use." : ""}</div>
      <div style={{color: 'red'}}>{this.props.message.username ? "Username is taken." : ""}</div>
      </div>
    )
  }
}
