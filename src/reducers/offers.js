import { OFFERS_SUCCESS } from '../actions/constants';

const data = (state = [], action) => {
  switch (action.type) {
    case OFFERS_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default data;
