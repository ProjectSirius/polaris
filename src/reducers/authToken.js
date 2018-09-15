import { SAVE_TOKEN, LOGOUT_SUCCESS } from '../actions/constants';

const authToken = (state = '', action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return action.payload.token;
    case LOGOUT_SUCCESS:
      return '';
    default:
      return state;
  }
};

export default authToken;
