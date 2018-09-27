import ReactDOM from 'react-dom';
import React, { Component } from 'react';


export default function loginReducer ( state = {
  loggedIn: false
}, action) {
  switch (action.type) {
    case 'LOG_IN':
    console.log(action)
    return state
    default:
    return state
  }
}
