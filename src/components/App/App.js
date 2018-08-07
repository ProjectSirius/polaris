import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { injectIntl, defineMessages } from 'react-intl';

import HomePage from '../HomePage';
import LogIn from '../LogIn';
import SignUpAudienceContainer from '../../containers/SignUpAudienceContainer';
import SignUpContentMaker from '../SignUpContentMaker';
import ProtectedRouteContainer from '../../containers/ProtectedRouteContainer';
import AudienceHomePage from '../AudienceHomePage';
import ContentOwnerHomePage from '../ContentOwnerHomePage';

import './App.css';

const messages = defineMessages({
  title: {
    id: 'app.title',
    defaultMessage: 'Welcome to Polaris',
  },
  content1: {
    id: 'app.content1',
    defaultMessage: 'To get started, log in',
  },
});

class App extends Component {
  render() {
    const {
      intl: { formatMessage },
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <div className="languages">
            <a href="/?locale=ru">RU</a> <a href="/?locale=en">EN</a>
          </div>
          <h1 className="App-title">{formatMessage(messages.title)}</h1>
          <p className="App-intro">{formatMessage(messages.content1)} </p>
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

export default injectIntl(App);
