import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { login } from '../actions';

import LogIn from '../components/LogIn';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

const LoginForm = reduxForm({
  form: 'Login_form',
})(LogIn);

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
