import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import arLocaleData from 'react-intl/locale-data/ar';
import esLocaleData from 'react-intl/locale-data/es';

import translations from '../../i18n/locales';
import App from '../App';

import './styles.css';

addLocaleData(arLocaleData);
addLocaleData(esLocaleData);

const Root = ({ store }) => {
  const locale = window.location.search.replace('?locale=', '') || 'en';
  const messages = translations[locale];

  return (
    <Provider store={store}>
      <Router>
        <IntlProvider locale={locale} key={locale} messages={messages}>
          <App />
        </IntlProvider>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
