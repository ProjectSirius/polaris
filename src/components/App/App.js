import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogIn from '../LogIn';
import SignUpAudienceContainer from '../../containers/SignUpAudienceContainer';
import SignUpContentMaker from '../SignUpContentMaker';
import ProtectedRouteContainer from '../../containers/ProtectedRouteContainer';
import AudienceHomePage from '../AudienceHomePage';
import ContentOwnerHomePage from '../ContentOwnerHomePage';

import './App.css';
import HomePageContainer from '../../containers/HomePageContainer';

const App = ({ content, title }) => {
  const path = window.location.pathname;

  return (
    <div className="App">
      <header className="App-header">
        <div className="languages">
          <a href={`${path}?locale=ru`}>RU</a>{' '}
          <a href={`${path}?locale=en`}>EN</a>
        </div>
        <h1 className="App-title">{title}</h1>
        <p className="App-intro">{content} </p>
      </header>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
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
};

export default App;
