import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";



 class LogOut extends Component {
   componentWillMount () {
       this.props.logout();
   }

   render() {
     return(
     <Redirect to="/" />
  ) }
 }

 function mapDispatchToProps(dispatch){
     return { logout: () => dispatch({type: "LOG_OUT"})}
 }

 export default connect(null,mapDispatchToProps)(LogOut)
