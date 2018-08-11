import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import { login } from '../actions';

import {
  selectIsAuth,
  selectCurrentUser,
  selectLanguage,
  selectIsRequesting,
  selectError,
} from '../selectors';

import loginValidate from '../helpers/loginValidate';

import LogIn from '../components/LogIn';

const mapStateToProps = createStructuredSelector({
  isAuth: selectIsAuth,
  currentUser: selectCurrentUser,
  lang: selectLanguage,
  isRequesting: selectIsRequesting,
  loginError: selectError,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

const LoginForm = reduxForm({
  form: 'Login_form',
  validate: loginValidate,
  destroyOnUnmount: false,
})(LogIn);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
