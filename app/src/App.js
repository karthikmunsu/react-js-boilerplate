import React, { Component } from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import './App.css';

import { Home } from './components/Home';
import { Root } from './components/Root';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Landing } from './components/Landing';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home}/>
        </Route>
        <Route path={"login"} component={Login}/>
        <Route path={"signup"} component={Signup}/>
        <Route path={"landing/:id"} component={Landing}/>
        <Route path={"home"} component={Home}/>
      </Router>
    );
  }
}

export default App;
