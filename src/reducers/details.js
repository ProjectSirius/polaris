import {
  DETAILS_RECEIVE_SUCCESS,
  DATA_DELETE_SUCCESS,
} from '../actions/constants';

const detailed = (state = {}, action) => {
  switch (action.type) {
    case DETAILS_RECEIVE_SUCCESS:
      return action.payload.data;
    case DATA_DELETE_SUCCESS:
      return 'deleted';
    default:
      return state;
  }
};
export default detailed;
