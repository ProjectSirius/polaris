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
import tags from './tags';
import notif from './notif';
import transactions from './transactions';
import details from './details';
import isEditing from './isEditing';
import isGroupOffering from './isGroupOffering';
import groupOffer from './groupOffer';
import genres from './genres';
import authToken from './authToken';
import isDataSent from './isDataSent';
import userData from './user-data';

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
  tags,
  notif,
  transactions,
  details,
  isEditing,
  isGroupOffering,
  groupOffer,
  genres,
  authToken,
  isDataSent,
  userData,
});
