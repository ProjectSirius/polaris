import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage';
import LogIn from '../LogIn';
import SignUpAudience from '../SignUpAudience';
import SignUpContentMaker from '../SignUpContentMaker';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Polaris Project</h1>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LogIn} />
          <Route path="/signUpAudience" component={SignUpAudience} />
          <Route path="/signUpContentMaker" component={SignUpContentMaker} />
          <Route render={() => <h1>Not Found App</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
