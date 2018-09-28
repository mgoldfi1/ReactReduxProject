import ReactDOM from 'react-dom';
import React, { Component } from 'react';


export default function loginReducer ( state = {
  loggedIn: false,
  message: ""
}, action) {
  switch (action.type) {
    case 'LOG_IN':
    return {...state, loggedIn: true}
    case 'MESSAGE':
    return {...state, message: action.text}
    default:
    return state
  }
}
