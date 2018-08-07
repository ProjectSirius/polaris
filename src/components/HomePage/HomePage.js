import React from 'react';
import { injectIntl, defineMessages } from 'react-intl';

import './styles.css';

const messages = defineMessages({
  title: {
    id: 'home-page-title',
    defaultMessage: 'Home Page',
  },
});

const HomePage = props => {
  const {
    intl: { formatMessage },
  } = props;

  return <div>{formatMessage(messages.title)}</div>;
};

export default injectIntl(HomePage);
