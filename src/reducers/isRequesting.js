import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/constants';

const isRequesting = (state = false, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
    case LOGIN_REQUEST:
      return true;
    case SIGN_UP_SUCCESS:
    case SIGN_UP_FAILURE:
    case LOGOUT_SUCCESS:
    case LOGIN_FAILURE:
      return false;
    default:
      return state;
  }
};

export default isRequesting;
