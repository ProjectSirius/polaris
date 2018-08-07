import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import queryString from 'query-string';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';

import translations from '../../i18n/locales';
import AppContainer from '../../containers/AppContainer';

import './styles.css';

addLocaleData(ruLocaleData);

const Root = ({ store }) => {
  /*
   * it's plain object
   * if url = smth.com/search=1&locale=en then it looks like {search: 1, locale: 'en'}
   */
  const parseUrl = queryString.parse(window.location.search);
  const locale = parseUrl.locale || 'en';
  const messages = translations[locale];

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
