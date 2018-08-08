import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';
import { withRouter } from 'react-router-dom';

import App from '../components/App';

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

let AppContainer = props => {
  const {
    intl: { formatMessage },
  } = props;

  const formattedTitle = formatMessage(messages.title);
  const formattedContent = formatMessage(messages.content1);

  return <App title={formattedTitle} content={formattedContent} />;
};

AppContainer = injectIntl(AppContainer);

export default withRouter(connect()(AppContainer));
