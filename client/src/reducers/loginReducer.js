import ReactDOM from 'react-dom';
import React, { Component } from 'react';


export default function loginReducer ( state = {
  loggedIn: false,
  message: "",
  user: {},
  loading: false,
  movies: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'LOG_IN':
    console.log(action.user)
    return {...state, loggedIn: true, user: action.user}
    case 'MESSAGE':
    return {...state, message: action.text}
    case 'LOADING':
    return {...state, loading: true}
    case 'ADD_MOVIES':
    console.log(action.movies)
    return {...state, loading: false, movies: action.movies}
    default:
    return state
  }
}
