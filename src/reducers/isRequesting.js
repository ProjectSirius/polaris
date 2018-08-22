import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_FAILURE,
  DATA_REQUEST,
  DATA_RECEIVE_SUCCESS,
  DATA_RECEIVE_FAILURE,
  DATA_SEND_REQUEST,
  DATA_SEND_SUCCESS,
  DATA_SEND_FAILURE,
  DETAILS_RECEIVE_SUCCESS,
} from '../actions/constants';

const isRequesting = (state = false, action) => {
  switch (action.type) {
    case DETAILS_RECEIVE_SUCCESS:
    case DATA_SEND_REQUEST:
    case SIGN_UP_REQUEST:
    case LOGIN_REQUEST:
    case DATA_REQUEST:
      return true;
    case SIGN_UP_SUCCESS:
    case SIGN_UP_FAILURE:
    case LOGOUT_SUCCESS:
    case LOGIN_FAILURE:
    case DATA_RECEIVE_SUCCESS:
    case DATA_RECEIVE_FAILURE:
    case DATA_SEND_SUCCESS:
    case DATA_SEND_FAILURE:
      return false;
    default:
      return state;
  }
};

export default isRequesting;
