import {
  SIGN_UP_FAILURE,
  LOGIN_FAILURE,
  SEARCH_FAILURE,
} from '../actions/constants';

const error = (state = null, action) => {
  switch (action.type) {
    case SIGN_UP_FAILURE:
    case LOGIN_FAILURE:
    case SEARCH_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
};

export default error;
