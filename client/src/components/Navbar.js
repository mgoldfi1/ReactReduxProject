import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const link = {
  width: '150px',
  padding: '50px, 50px, 50px, 50px',
  margin: '24px, 24px, 24px, 24px',

  background: 'grey',
  textDecoration: 'none',
  color: 'white'
}

const nav1 = (
<Navbar default collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">MOVIEDIARY</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
  <NavItem eventKey={1} componentClass={Link} href="/"  to="/">
      Home
      </NavItem>
  <NavItem eventKey={2} componentClass={Link} href="/login" to="/login">
      Login
      </NavItem>
  <NavItem eventKey={3} componentClass={Link} href="/register" to="/register">
      Register
      </NavItem>
    </Nav>
    </Navbar.Collapse>
  </Navbar>)

  const nav2 = (
  <Navbar default collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">MOVIEDIARY</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
    <NavItem eventKey={1} componentClass={Link} href="/"  to="/">
        Home
        </NavItem>
    <NavItem eventKey={2} componentClass={Link} href="/user" to="/user">
        Your Page
        </NavItem>
    <NavItem eventKey={3} componentClass={Link} href="/logout" to="/logout">
        Log Out
        </NavItem>
    <NavItem eventKey={4} componentClass={Link} href="/movies" to="/movies">
            Movies
            </NavItem>
      </Nav>
      </Navbar.Collapse>
    </Navbar>)



  class CustomNavbar extends React.Component {


    render() {
      return(
      <div >{this.props.loggedIn ? nav2 : nav1}</div>
    )}
  }


  const mapStateToProps = state => {
    return {loggedIn: state.loggedIn}
  }


  export default connect(mapStateToProps)(CustomNavbar)
