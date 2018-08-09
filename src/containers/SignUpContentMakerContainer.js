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
import SignUpContentMaker from '../components/SignUpContentMaker';

const mapStateToProps = createStructuredSelector({
  isSignUp: selectIsSignUp,
  isSignUpRequesting: selectIsSignUpRequesting,
  error: selectError,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
});

const SignUpContentMakerForm = reduxForm({
  form: 'SignUpContentOwnerForm',
  initialValues: {
    userType: 'content_owner',
  },
  validate: signUpValidate,
})(SignUpContentMaker);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContentMakerForm);
