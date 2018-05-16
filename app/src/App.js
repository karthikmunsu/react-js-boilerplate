import React, { Component } from 'react';
import './App.css';

import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import { Root } from './components/Root';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Landing } from './components/Landing';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={Root}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/landing" component={Landing}/>
          <Route path="/landing/:user_name" component={Landing}/>
        </Route>
      </Router>
    );
  }
}

export default App;
