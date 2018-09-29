import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const link = {
  width: '100px',

  margin: '12px, 12px, 12px, 12px',

  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const Navbar = () =>
  <div>
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
  </div>;

  export default Navbar
