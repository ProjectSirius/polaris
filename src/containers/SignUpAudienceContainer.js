import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { signUp } from '../actions';

import { selectIsSignUp } from '../selectors/isSignUp';

import signUpValidate from '../helpers/signUpValidate';

import SignUpAudience from '../components/SignUpAudience';

const mapStateToProps = createStructuredSelector({
  isSignUp: selectIsSignUp,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
});

const SignUpAudienceForm = reduxForm({
  form: 'SignUpAudienceForm',
  initialValues: {
    userType: 'audience_owner',
  },
  validate: signUpValidate,
})(SignUpAudience);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpAudienceForm);
