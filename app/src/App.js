import React, { Component } from 'react';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom'

import History from './components/History';

import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Root } from "./components/Root";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Landing } from "./components/Landing";
import { NotFound } from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <Switch>
          <React.Fragment>
            <Header/>
              <Route exact path="/" component={Root}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/landing" component={Landing}/>
          </React.Fragment>
              <Route component={ NotFound }/>
        </Switch>
      </Router>
    );
  }
}

export default App;
