import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import History from './components/history';
import { Root } from './components/Root';
import { Landing } from './components/landing';
import { NavBar } from './components/NavBar';
import { Footer } from './components/footer';

class App extends Component {
  render() {
    return (
      <Router history={History} >
        <Switch>
          <React.Fragment>
            <NavBar/>
            <Route path='/' component={Root}/>
            <Route path='/home' component={Landing}/>
            <Footer/>
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

export default App;
