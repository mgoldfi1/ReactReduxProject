import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Header from './components/Header'
ReactDOM.render((
  <Router>
    <React.Fragment>
      <Header />
      <Navbar />
      <Route exact path="/" component={App} />

      <Route exact path="/login" component={Login} />

    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
registerServiceWorker();
