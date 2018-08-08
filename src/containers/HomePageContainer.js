import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';

import HomePage from '../components/HomePage';

const messages = defineMessages({
  title: {
    id: 'home-page-title',
    defaultMessage: 'Home Page',
  },
});

let HomePageContainer = props => {
  const {
    intl: { formatMessage },
  } = props;

  const formattedTitle = formatMessage(messages.title);

  return <HomePage title={formattedTitle} />;
};

HomePageContainer = injectIntl(HomePageContainer);

export default connect()(HomePageContainer);
