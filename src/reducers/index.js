import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import isSignUp from './isSignUp';
import lang from './lang';
import currentUser from './currentUser';
import isAuth from './isAuth';
import isOpenMainMenu from './mainMenu';
import isSignUpRequesting from './isSignUpRequesting';
import error from './error';

export default combineReducers({
  form: formReducer,
  isSignUp,
  lang,
  currentUser,
  isAuth,
  isOpenMainMenu,
  isSignUpRequesting,
  error,
});
