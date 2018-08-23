import { TRANSACTION_SUCCESS } from '../actions/constants';

const data = (state = [], action) => {
  switch (action.type) {
    case TRANSACTION_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default data;
