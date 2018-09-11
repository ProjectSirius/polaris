import {
  TRANSACTION_SUCCESS,
  TRANSACTION_USER,
  SEND_TRANSACTION_SUCCESS,
  SEND_TRANSACTION_DECLINE,
} from '../actions/constants';
import { combineReducers } from 'redux';

const data = (state = [], action) => {
  switch (action.type) {
    case TRANSACTION_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case TRANSACTION_USER:
      return { ...state, [action.payload.user.id]: action.payload.user };
    default:
      return state;
  }
};

const approveDecline = (state = false, action) => {
  switch (action.type) {
    case SEND_TRANSACTION_SUCCESS:
    case SEND_TRANSACTION_DECLINE:
      return true;
    default:
      return false;
  }
};

export default combineReducers({ data, user, approveDecline });
