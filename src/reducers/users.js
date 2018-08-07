import {
  SIGN_UP_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
} from '../actions/constants';

const users = (state = [], action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return action.payload;
    case SIGN_UP_SUCCESS:
      return [...state, action.payload];
    case SIGN_UP_FAILURE:
      return state;
    default:
      return state;
  }
};

export default users;
