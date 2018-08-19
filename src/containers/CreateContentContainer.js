import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import { selectIsRequesting, selectTags } from '../selectors';

import { addTags, removeTags, sendData } from '../actions';

import CreateCard from '../components/CreateCard';

import channelFormValidate from '../helpers/channelFormValidate';
import messages from '../helpers/contentChannelFormMessages';

let CreateContentContainer = props => {
  const {
    intl: { formatMessage },
  } = props;

  const onFormSubmit = formData => {
    props.sendData(formData, 'createContent');
  };

  return (
    <CreateCard
      messages={messages}
      userType="content_owner"
      {...props}
      onFormSubmit={onFormSubmit}
      formatMessage={formatMessage}
    />
  );
};

CreateContentContainer = injectIntl(CreateContentContainer);

const mapStateToProps = createStructuredSelector({
  isRequesting: selectIsRequesting,
  tags: selectTags,
});

const addNewContentForm = reduxForm({
  form: 'Add_new_content_form',
  validate: channelFormValidate,
  initialValues: {
    unit: 'view',
  },
  destroyOnUnmount: false,
})(CreateContentContainer);

export default connect(
  mapStateToProps,
  {
    addTags,
    removeTags,
    sendData,
  }
)(addNewContentForm);
