import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import loginReducer from './reducers/loginReducer'

const store = createStore(loginReducer)

ReactDOM.render((
  <Provider store={store}>
  <Router>
    <React.Fragment>
      <Header />
      <Navbar />
      <Route exact path="/" component={App} />

      <Route exact path="/login" component={Login} />

    </React.Fragment>
  </Router>
</Provider>),
  document.getElementById('root')
);
registerServiceWorker();
