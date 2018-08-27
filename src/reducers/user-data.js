import { USER_DATA_SUCCESS } from '../actions/constants';

const data = (state = [], action) => {
  switch (action.type) {
    case USER_DATA_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default data;
