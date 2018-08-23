import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LogIn from '../../containers/Login';
import SignUpAudienceContainer from '../../containers/SignUpAudienceContainer';
import SignUpContentMaker from '../../containers/SignUpContentMakerContainer';
import ProtectedRouteContainer from '../../containers/ProtectedRouteContainer';
import AudienceHomePage from '../AudienceHomePage';
import ContentOwnerHomePage from '../ContentOwnerHomePage';
import HomePageContainer from '../../containers/HomePageContainer';
import MainNavBarContainer from '../../containers/MainNavBarContainer';
import DetailedPageContainer from '../../containers/DetailedPageContainer';
import CreateChannel from '../../containers/CreateChannel';
import CreateContent from '../../containers/CreateContentContainer';
import Dashboard from '../../containers/DashboardContainer';

const App = ({ content, title }) => {
  return (
    <div className="App">
      <MainNavBarContainer />
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
        <ProtectedRouteContainer
          path="/channels/new"
          component={CreateChannel}
        />
        <ProtectedRouteContainer
          path="/contents/new"
          component={CreateContent}
        />
        <ProtectedRouteContainer path="/dashboard" component={Dashboard} />
        <ProtectedRouteContainer
          path="/channels/:id"
          component={DetailedPageContainer}
        />
        <ProtectedRouteContainer
          path="/contents/:id"
          component={DetailedPageContainer}
        />
        <Route render={() => <h1>Not Found App</h1>} />
      </Switch>
    </div>
  );
};

export default App;
