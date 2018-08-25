import {
  ADD_TO_GROUP_OFFER,
  REMOVE_FROM_GROUP_OFFER,
} from '../actions/constants';

const groupOffer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_GROUP_OFFER:
      return [...state, action.payload.id];
    case REMOVE_FROM_GROUP_OFFER:
      return state.filter(el => el !== action.payload.id);
    default:
      return state;
  }
};

export default groupOffer;
