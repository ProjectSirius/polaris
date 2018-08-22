import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';

import DetailedPage from '../components/DetailsPage';

const messages = defineMessages({
  title: {
    id: 'detailed-page-title',
    defaultMessage: 'Detailed Page',
  },
});

let HomePageContainer = props => {
  const {
    intl: { formatMessage },
  } = props;

  const formattedTitle = formatMessage(messages.title);

  return <DetailedPage title={formattedTitle} />;
};

HomePageContainer = injectIntl(HomePageContainer);

export default connect()(HomePageContainer);
