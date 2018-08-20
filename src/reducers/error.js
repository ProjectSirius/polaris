import {
  SIGN_UP_FAILURE,
  LOGIN_FAILURE,
  DATA_RECEIVE_FAILURE,
  DATA_SEND_FAILURE,
  DATA_REQUEST,
  LOGOUT_SUCCESS,
} from '../actions/constants';

const error = (state = '', action) => {
  switch (action.type) {
    case SIGN_UP_FAILURE:
    case LOGIN_FAILURE:
    case DATA_RECEIVE_FAILURE:
    case DATA_SEND_FAILURE:
      return action.payload.error ? action.payload.error : '';
    case DATA_REQUEST:
    case LOGOUT_SUCCESS:
      return '';
    default:
      return state;
  }
};

export default error;
