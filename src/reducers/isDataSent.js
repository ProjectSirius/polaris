import { DATA_SEND_SUCCESS } from '../actions/constants';

const isDataSent = (state = false, action) => {
  switch (action.type) {
    case DATA_SEND_SUCCESS:
      return true;
    default:
      return state;
  }
};

export default isDataSent;
