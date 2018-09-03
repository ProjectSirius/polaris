import {
  DATA_EDIT_SUCCESS,
  DATA_EDIT_FAILURE,
  DATA_EDIT_REQUEST,
} from '../actions/constants';

const isEditing = (state = false, action) => {
  switch (action.type) {
    case DATA_EDIT_SUCCESS:
    case DATA_EDIT_REQUEST:
      return true;
    case DATA_EDIT_FAILURE:
      return false;
    default:
      return state;
  }
};

export default isEditing;
