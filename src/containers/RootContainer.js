import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { addLocaleData } from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from '../components/Root/';
import translations from '../i18n/locales';
import { changeLang } from '../actions';

addLocaleData(ruLocaleData);

class RootContainer extends React.Component {
  componentDidMount() {
    /*
     * it's plain object
     * if url = smth.com/search=1&locale=en then it looks like {search: 1, locale: 'en'}
     */
    const parseUrl = queryString.parse(window.location.search);
    const locale = parseUrl.locale || 'ru';

    this.props.changeLang(locale);
  }

  render() {
    const { store, locale } = this.props;
    const messages = translations[locale];

    return (
      <Router>
        <Root store={store} locale={locale} messages={messages} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.lang,
});

const mapDispatchToProps = dispatch => ({
  changeLang: lang => dispatch(changeLang(lang)),
});

RootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);

export default RootContainer;
