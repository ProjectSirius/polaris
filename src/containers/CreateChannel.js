import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import {
  selectIsRequesting,
  selectTags,
  selectIsAuth,
  selectCurrentUser,
} from '../selectors';

import { addTags, removeTags, sendData } from '../actions';

import CreateCard from '../components/CreateCard';

import channelFormValidate from '../helpers/channelFormValidate';
import messages from '../helpers/contentChannelFormMessages';

let CreateChannelContainer = props => {
  const {
    intl: { formatMessage },
  } = props;

  const onFormSubmit = formData => {
    props.sendData(formData, 'createChannel');
  };

  return (
    <CreateCard
      messages={messages}
      formatMessage={formatMessage}
      {...props}
      onFormSubmit={onFormSubmit}
      userType="audience_owner"
    />
  );
};

CreateChannelContainer = injectIntl(CreateChannelContainer);

const mapStateToProps = createStructuredSelector({
  isRequesting: selectIsRequesting,
  tags: selectTags,
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
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
