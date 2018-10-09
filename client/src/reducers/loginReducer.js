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
    return {...state, loggedIn: true, user: action.user}
    case 'MESSAGE':
    return {...state, message: action.text, loggedIn: false}
    case 'LOADING':
    return {...state, loading: true}
    case 'ADD_MOVIES':
    console.log(action.movies)
    return {...state, loading: false, movies: action.movies}
    case 'LOG_OUT':
    console.log("logging out")
    return {...state, loggedIn: false}
    case 'NEW_REVIEW':
    console.log(action.review)
    return {...state, reviews: [...state.reviews, action.review]}
    default:
    return state
  }
}
