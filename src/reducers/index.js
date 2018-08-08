import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import isSignUp from './isSignUp';
import lang from './lang';
import currentUser from './currentUser';
import isAuth from './isAuth';

export default combineReducers({
  form: formReducer,
  isSignUp,
  lang,
  currentUser,
  isAuth,
});
