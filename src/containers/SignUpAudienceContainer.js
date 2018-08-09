import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { signUp } from '../actions';

import {
  selectIsSignUpRequesting,
  selectIsSignUp,
  selectError,
} from '../selectors';

import signUpValidate from '../helpers/signUpValidate';

import SignUpForm from '../components/SignUpForm';

const mapStateToProps = createStructuredSelector({
  isSignUp: selectIsSignUp,
  isSignUpRequesting: selectIsSignUpRequesting,
  errorSignUp: selectError,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
});

let SignUpAudienceForm = ({ ...props }) => {
  return <SignUpForm {...props} formTitle="Audience Form" />;
};

SignUpAudienceForm = reduxForm({
  form: 'SignUpAudienceForm',
  initialValues: {
    userType: 'audience_owner',
  },
  validate: signUpValidate,
})(SignUpAudienceForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpAudienceForm);
