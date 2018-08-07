import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import signUp from '../actions/signUp';

import SignUpAudience from '../components/SignUpAudience';

const mapDispatchToProps = dispatch => ({
  signUp: user => dispatch(signUp(user)),
});

const SignUpAudienceForm = reduxForm({
  form: 'SignUpAudienceForm',
})(SignUpAudience);

export default connect(
  null,
  mapDispatchToProps
)(SignUpAudienceForm);
