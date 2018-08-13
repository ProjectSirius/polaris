import { DATA_RECEIVE_SUCCESS } from '../actions/constants';

const data = (state = [], action) => {
  switch (action.type) {
    case DATA_RECEIVE_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default data;
