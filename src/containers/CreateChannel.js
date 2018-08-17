import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl, defineMessages } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { selectIsRequesting } from '../selectors';

import CreateChannel from '../components/CreateChannel';

import channelFormValidate from '../helpers/channelFormValidate';

const messages = defineMessages({
  title: {
    id: 'create-new-channel-title',
    defaultMessage: 'New Channel Page',
  },
});

let CreateChannelContainer = props => {
  return <CreateChannel messages={messages} {...props} />;
};

CreateChannelContainer = injectIntl(CreateChannelContainer);

const mapStateToProps = createStructuredSelector({
  isRequesting: selectIsRequesting,
});

const addNewChannelForm = reduxForm({
  form: 'Add_new_channel_form',
  validate: channelFormValidate,
  destroyOnUnmount: false,
})(CreateChannelContainer);

export default connect(mapStateToProps)(addNewChannelForm);
