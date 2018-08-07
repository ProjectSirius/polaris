import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import AppContainer from '../../containers/AppContainer';

import './styles.css';

const Root = ({ store, locale, messages }) => {
  return (
    <Provider store={store}>
      <Router>
        <IntlProvider locale={locale} key={locale} messages={messages}>
          <AppContainer />
        </IntlProvider>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
