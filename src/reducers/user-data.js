import {
  USER_DATA_SUCCESS,
  DATA_DELETE_SUCCESS,
  DATA_EDIT_SUCCESS,
} from '../actions/constants';

const data = (state = [], action) => {
  switch (action.type) {
    case USER_DATA_SUCCESS:
      return action.payload.data;
    case DATA_DELETE_SUCCESS:
      return action.payload.data.filter(({ id }) => id !== action.payload.id);
    case DATA_EDIT_SUCCESS:
      return action.payload.data.map(
        elem =>
          elem.id === action.payload.item.id ? action.payload.item : elem
      );
    default:
      return state;
  }
};

export default data;
