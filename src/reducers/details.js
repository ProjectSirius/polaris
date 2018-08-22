import { DETAILS_RECEIVE_SUCCESS } from '../actions/constants';
const detailed = (state = {}, action) => {
  switch (action.type) {
    case DETAILS_RECEIVE_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};
export default detailed;
