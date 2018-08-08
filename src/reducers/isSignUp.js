import { SIGN_UP_SUCCESS } from '../actions/constants';

const isSingUp = (state = false, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default isSingUp;
