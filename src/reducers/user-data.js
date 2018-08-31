import { USER_DATA_SUCCESS, DATA_DELETE_SUCCESS } from '../actions/constants';

const data = (state = [], action) => {
  switch (action.type) {
    case USER_DATA_SUCCESS:
      return action.payload.data;
    case DATA_DELETE_SUCCESS:
      return action.payload.data.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default data;
