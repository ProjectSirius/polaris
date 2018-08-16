import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';

import CreateChannel from '../components/CreateChannel';

const messages = defineMessages({
  title: {
    id: 'create-new-channel-title',
    defaultMessage: 'New Channel Page',
  },
});

let CreateChannelContainer = props => {
  const {
    intl: { formatMessage },
  } = props;

  const formattedTitle = formatMessage(messages.title);

  return <CreateChannel title={formattedTitle} />;
};

CreateChannelContainer = injectIntl(CreateChannelContainer);

export default connect()(CreateChannelContainer);
