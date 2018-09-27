import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'

ReactDOM.render((
  <Router>
    <React.Fragment>
      <div><Route exact path="/" component={App} /></div>
      <Route exact path="/login" component={Login} />
      <div><Navbar /></div>
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
registerServiceWorker();
