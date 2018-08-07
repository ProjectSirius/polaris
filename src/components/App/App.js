import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../HomePage';
import LogIn from '../LogIn';
import SignUpAudienceContainer from '../../containers/SignUpAudienceContainer';
import SignUpContentMaker from '../../containers/SignUpContentMakerContainer';
import ProtectedRouteContainer from '../../containers/ProtectedRouteContainer';
import AudienceHomePage from '../AudienceHomePage';
import ContentOwnerHomePage from '../ContentOwnerHomePage';

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
          <Route path="/signUpAudience" component={SignUpAudienceContainer} />
          <Route path="/signUpContentMaker" component={SignUpContentMaker} />
          <ProtectedRouteContainer
            path="/audience"
            component={AudienceHomePage}
          />
          <ProtectedRouteContainer
            path="/contentowner"
            component={ContentOwnerHomePage}
          />
          <Route render={() => <h1>Not Found App</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
