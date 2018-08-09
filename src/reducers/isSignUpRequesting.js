import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../actions/constants';

const isSignUpRequesting = (state = false, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return true;
    case SIGN_UP_SUCCESS:
    case SIGN_UP_FAILURE:
      return false;
    default:
      return state;
  }
};

export default isSignUpRequesting;
