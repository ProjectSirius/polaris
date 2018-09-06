import { ADD_DATA_ADDRESS } from '../actions/constants';

const newDataAddress = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA_ADDRESS:
      return action.payload.coordinates;
    default:
      return state;
  }
};

export default newDataAddress;
