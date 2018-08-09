import { SIGN_UP_FAILURE } from '../actions/constants';

const error = (state = null, action) => {
  switch (action.type) {
    case SIGN_UP_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
};

export default error;
