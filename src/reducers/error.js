import {
  SIGN_UP_FAILURE,
  LOGIN_FAILURE,
  DATA_RECEIVE_FAILURE,
  DATA_SEND_FAILURE,
  DATA_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_REQUEST,
  TRANSACTION_FAILURE,
  NOTIF_FAILURE,
  GENRES_FAILURE,
  USER_DATA_FAILURE,
} from '../actions/constants';

const error = (state = '', action) => {
  switch (action.type) {
    case SIGN_UP_FAILURE:
    case LOGIN_FAILURE:
    case DATA_RECEIVE_FAILURE:
    case DATA_SEND_FAILURE:
    case TRANSACTION_FAILURE:
    case NOTIF_FAILURE:
    case GENRES_FAILURE:
    case USER_DATA_FAILURE:
      return action.payload.error;
    case DATA_REQUEST:
    case LOGOUT_SUCCESS:
    case LOGIN_REQUEST:
      return '';
    default:
      return state;
  }
};

export default error;
