import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import isSignUp from './isSignUp';

export default combineReducers({
  form: formReducer,
  isSignUp,
});
