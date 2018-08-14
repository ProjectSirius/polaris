import {
  SIGN_UP_FAILURE,
  LOGIN_FAILURE,
  DATA_RECEIVE_FAILURE,
} from '../actions/constants';

const error = (state = null, action) => {
  switch (action.type) {
    case SIGN_UP_FAILURE:
    case LOGIN_FAILURE:
    case DATA_RECEIVE_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
};

export default error;
