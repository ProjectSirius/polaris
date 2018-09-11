import { REMOVE_FROM_CART, SAVE_LAST_OFFERED_ID } from '../actions/constants';

const lastOfferedId = (state = '', action) => {
  switch (action.type) {
    case SAVE_LAST_OFFERED_ID:
      return action.payload.id;
    case REMOVE_FROM_CART:
      return '';
    default:
      return state;
  }
};

export default lastOfferedId;
