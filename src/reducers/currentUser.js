import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '../actions/constants';

const currentUser = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload.user;
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default currentUser;
