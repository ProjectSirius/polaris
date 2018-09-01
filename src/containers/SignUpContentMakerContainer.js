import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { injectIntl, defineMessages } from 'react-intl';

import { signUp } from '../actions';
import SignUpForm from '../components/SignUpForm';

import {
  selectIsRequesting,
  selectIsSignUp,
  selectError,
  selectLanguage,
} from '../selectors';

import signUpValidate from '../helpers/signUpValidate';

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
  fillSignUpForm: {
    id: 'fillSignUpForm',
    defaultMessage: 'Fill out the form below to sign up in a new account!',
  },
  haveAcc: {
    id: 'haveAcc',
    defaultMessage: 'Already have an account?',
  },
  login: {
    id: 'login',
    defaultMessage: 'Login here',
  },
  instead: {
    id: 'instead',
    defaultMessage: 'instead',
  },
  username: {
    id: 'username',
    defaultMessage: 'Username',
  },
  email: {
    id: 'email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'password',
    defaultMessage: 'Password',
  },
  confirms: {
    id: 'confirm',
    defaultMessage: 'Confirm Password',
  },
  signUp: {
    id: 'signUp',
    defaultMessage: 'Sign Up',
  },
  contentSignUp: {
    id: 'signUpContent',
    defaultMessage: 'Content Owner',
  },
});

const mapStateToProps = createStructuredSelector({
  isSignUp: selectIsSignUp,
  isRequesting: selectIsRequesting,
  errorSignUp: selectError,
  lang: selectLanguage,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
});

let SignUpContentMakerForm = ({ intl: { formatMessage }, ...props }) => {
  return (
    <SignUpForm
      {...props}
      messages={messages}
      formatMessage={formatMessage}
      user="content"
    />
  );
};

SignUpContentMakerForm = reduxForm({
  form: 'SignUpContentOwnerForm',
  initialValues: {
    userType: 'content_owner',
  },
  validate: signUpValidate,
  destroyOnUnmount: false,
})(SignUpContentMakerForm);

SignUpContentMakerForm = injectIntl(SignUpContentMakerForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContentMakerForm);
