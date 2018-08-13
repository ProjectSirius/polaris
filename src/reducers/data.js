import { SEARCH_SUCCESS } from '../actions/constants';

const data = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default data;
