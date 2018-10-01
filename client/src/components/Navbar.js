import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const link = {
  width: '100px',

  margin: '12px, 12px, 12px, 12px',

  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const nav1 = (<div>
  <NavLink
    to="/"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Home</NavLink>
  <NavLink
    to="/login"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Log In</NavLink>
  <NavLink
    to="/register"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Register</NavLink>
</div>)

const nav2 = (<div>
  <NavLink
    to="/"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Home</NavLink>
  <NavLink
    to="/logout"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Log Out</NavLink>
  <NavLink
    to="/movies"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Movies</NavLink>
  <NavLink
    to="/user"
    exact
    style={link}
    activeStyle={{
      background: 'darkblue'
    }}
  >Your Page</NavLink>
</div>)

  class Navbar extends React.Component {


    render() {
      return(
      <div>{this.props.loggedIn ? nav2 : nav1}</div>
    )}
  }


  const mapStateToProps = state => {
    return {loggedIn: state.loggedIn}
  }


  export default connect(mapStateToProps)(Navbar)
