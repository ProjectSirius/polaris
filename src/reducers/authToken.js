import { SAVE_TOKEN } from '../actions/constants';

const authToken = (state = '', action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return action.payload.token;
    default:
      return state;
  }
};

export default authToken;
