import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CustomNavbar from './components/Navbar'
import Login from './components/Login'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import loginReducer from './reducers/loginReducer'
import Register from './components/Register'
import thunk from 'redux-thunk';
import MovieContainer from './components/MovieContainer'
import MovieIndex from './components/MovieIndex'


const store = createStore(loginReducer, applyMiddleware(thunk))

ReactDOM.render((
  <Provider store={store}>
  <Router>
    <React.Fragment>
      <Header />
      <CustomNavbar />
      <Route exact path="/" component={App} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/movies" component={MovieIndex} />
      <Route exact path="/user" component={Login} />
    </React.Fragment>
  </Router>
</Provider>),
  document.getElementById('root')
);
registerServiceWorker();
