import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { injectIntl, defineMessages } from 'react-intl';

import { signUp } from '../actions';

import { selectIsRequesting, selectIsSignUp, selectError } from '../selectors';

import signUpValidate from '../helpers/signUpValidate';

import SignUpForm from '../components/SignUpForm';

const messages = defineMessages({
  audience: {
    id: 'audience',
    defaultMessage: 'Audience',
  },
  content: {
    id: 'content',
    defaultMessage: 'Content',
  },
  requestingAlert: {
    id: 'requesting-alert',
    defaultMessage: 'Please wait...',
  },
  formTitle: {
    id: 'Form',
    defaultMessage: 'Form',
  },
});

const mapStateToProps = createStructuredSelector({
  isSignUp: selectIsSignUp,
  isRequesting: selectIsRequesting,
  errorSignUp: selectError,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
});

let SignUpAudienceForm = ({ intl: { formatMessage }, ...props }) => {
  return (
    <SignUpForm
      {...props}
      messages={messages}
      formatMessage={formatMessage}
      user="audience"
    />
  );
};

SignUpAudienceForm = reduxForm({
  form: 'SignUpAudienceForm',
  initialValues: {
    userType: 'audience_owner',
  },
  validate: signUpValidate,
  destroyOnUnmount: false,
})(SignUpAudienceForm);

SignUpAudienceForm = injectIntl(SignUpAudienceForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpAudienceForm);
