import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { signUp } from '../actions';

import { selectIsSignUp } from '../selectors/isSignUp';

import SignUpContentMaker from '../components/SignUpContentMaker';

const mapStateToProps = createStructuredSelector({
  isSignUp: selectIsSignUp,
});

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
});

const SignUpContentMakerForm = reduxForm({
  form: 'SignUpContentOwnerForm',
  initialValues: {
    userType: 'content_owner',
  },
})(SignUpContentMaker);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpContentMakerForm);
