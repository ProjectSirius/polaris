import {
EDIT,
} from '../actions/constants';

const isEditing = (state = false, action) => {
  switch (action.type) {
    case EDIT:
      return true;
    default:
      return state;
  }
};

export default isEditing;
