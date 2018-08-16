import React from 'react';
import { connect } from 'react-redux';
import { injectIntl, defineMessages } from 'react-intl';

import CreateChannel from '../components/CreateChannel';
import { reduxForm } from 'redux-form';
import loginValidate from '../helpers/loginValidate';

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

const addNewChannelForm = reduxForm({
  form: 'Add_new_channel_form',
  validate: loginValidate,
  destroyOnUnmount: false,
})(CreateChannelContainer);

export default connect()(addNewChannelForm);
