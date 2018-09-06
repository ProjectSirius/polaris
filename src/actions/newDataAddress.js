import { ADD_DATA_ADDRESS } from './constants';

const addAddress = coordinates => {
  return {
    type: ADD_DATA_ADDRESS,
    payload: {
      coordinates,
    },
  };
};

export default addAddress;
