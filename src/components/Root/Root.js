import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { IntlProvider } from 'react-intl';

import AppContainer from '../../containers/AppContainer';

import './styles.css';

const Root = ({ store, locale, messages }) => {
  return (
    <Provider store={store}>
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <AppContainer />
      </IntlProvider>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
};

Root.defaultProps = {};

export default Root;
