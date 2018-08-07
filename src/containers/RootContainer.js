import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';

import Root from '../components/Root/';
import translations from '../i18n/locales';

addLocaleData(ruLocaleData);

let RootContainer = ({ store }) => {
  /*
   * it's plain object
   * if url = smth.com/search=1&locale=en then it looks like {search: 1, locale: 'en'}
   */
  const parseUrl = queryString.parse(window.location.search);
  const locale = parseUrl.locale || 'en';
  const messages = translations[locale];

  return <Root store={store} locale={locale} messages={messages} />;
};

export default connect()(RootContainer);
