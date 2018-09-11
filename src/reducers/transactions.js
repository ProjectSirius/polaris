import { TRANSACTION_SUCCESS, TRANSACTION_USER } from '../actions/constants';
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

export default combineReducers({ data, user });
