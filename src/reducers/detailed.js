import { DETAILED_RECEIVE_SUCCESS } from '../actions/constants';

const detailed = (state = [], action) => {
  switch (action.type) {
    case DETAILED_RECEIVE_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default detailed;
