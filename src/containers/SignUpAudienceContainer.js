import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import SignUpAudience from '../components/SignUpAudience';

const SignUpAudienceForm = reduxForm({
  form: 'SignUpAudienceForm',
})(SignUpAudience);

export default connect(
  null,
  null
)(SignUpAudienceForm);
