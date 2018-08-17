import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl, defineMessages } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { selectIsRequesting, selectTags } from '../selectors';

import { addTags, removeTags, sendData } from '../actions';

import CreateChannel from '../components/CreateChannel';

import channelFormValidate from '../helpers/channelFormValidate';

const messages = defineMessages({
  title: {
    id: 'create-new-channel-title',
    defaultMessage: 'New Channel Page',
  },
});

let CreateChannelContainer = props => {
  const onFormSubmit = formData => {
    props.sendData(formData, 'createChannel');
  };
  return (
    <CreateChannel messages={messages} {...props} onFormSubmit={onFormSubmit} />
  );
};

CreateChannelContainer = injectIntl(CreateChannelContainer);

const mapStateToProps = createStructuredSelector({
  isRequesting: selectIsRequesting,
  tags: selectTags,
});

const addNewChannelForm = reduxForm({
  form: 'Add_new_channel_form',
  validate: channelFormValidate,
  initialValues: {
    unit: 'view',
  },
  destroyOnUnmount: false,
})(CreateChannelContainer);

export default connect(
  mapStateToProps,
  {
    addTags,
    removeTags,
    sendData,
  }
)(addNewChannelForm);
