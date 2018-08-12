import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { signUp } from '../actions';
import SignUpForm from '../components/SignUpForm';

import { selectIsRequesting, selectIsSignUp, selectError } from '../selectors';

import signUpValidate from '../helpers/signUpValidate';

const mapStateToProps = createStructuredSelector({
  isSignUp: selectIsSignUp,
  isRequesting: selectIsRequesting,
  errorSignUp: selectError,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
});

let SignUpContentMakerForm = ({ ...props }) => {
  return <SignUpForm {...props} formTitle="Content Owner Form" />;
};

SignUpContentMakerForm = reduxForm({
  form: 'SignUpContentOwnerForm',
  initialValues: {
    userType: 'content_owner',
  },
  validate: signUpValidate,
  destroyOnUnmount: false,
})(SignUpContentMakerForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContentMakerForm);
