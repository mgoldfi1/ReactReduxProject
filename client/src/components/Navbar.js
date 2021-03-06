import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { handleLogOut } from '../actions/actionGenerator'

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

  const nav2 = (props) => (
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
    <NavItem eventKey={3} componentClass={Link} onClick={props.handleLogOut} href="/login" to="/login">
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
      <div >{this.props.loggedIn ? nav2(this.props) : nav1}</div>
    )}
  }


  const mapStateToProps = state => {
    return {loggedIn: state.loggedIn}
  }




  export default connect(mapStateToProps,{handleLogOut})(CustomNavbar)
