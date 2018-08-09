import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { signUp } from '../actions';

import { selectIsRequesting, selectIsSignUp, selectError } from '../selectors';

import signUpValidate from '../helpers/signUpValidate';

import SignUpForm from '../components/SignUpForm';

const mapStateToProps = createStructuredSelector({
  isSignUp: selectIsSignUp,
  isRequesting: selectIsRequesting,
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
