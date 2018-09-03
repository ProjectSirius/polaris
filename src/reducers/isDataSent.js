import { DATA_SEND_SUCCESS, DATA_EDIT_REDIRECT } from '../actions/constants';

const isDataSent = (state = false, action) => {
  switch (action.type) {
    case DATA_SEND_SUCCESS:
      return true;
    case DATA_EDIT_REDIRECT:
      return false;
    default:
      return state;
  }
};

export default isDataSent;
