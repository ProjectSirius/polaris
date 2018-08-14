import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import isSignUp from './isSignUp';
import lang from './lang';
import currentUser from './currentUser';
import isAuth from './isAuth';
import isOpenMainMenu from './mainMenu';
import isRequesting from './isRequesting';
import error from './error';
import data from './data';
import filteringPage from './filteringPage';

export default combineReducers({
  form: formReducer,
  isSignUp,
  lang,
  currentUser,
  isAuth,
  isOpenMainMenu,
  isRequesting,
  error,
  data,
  filteringPage,
});
