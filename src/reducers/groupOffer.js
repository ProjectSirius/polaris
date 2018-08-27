import {
  ADD_TO_GROUP_OFFER,
  REMOVE_FROM_GROUP_OFFER,
} from '../actions/constants';

const initialState = {
  buyer_id: null,
  selectedIds: [],
  options: {},
};

const groupOffer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_GROUP_OFFER:
      return {
        ...state,
        buyer_id: action.payload.buyer_id,
        selectedIds: [...state.selectedIds, action.payload.id],
      };
    case REMOVE_FROM_GROUP_OFFER:
      return {
        ...state,
        buyer_id: action.payload.buyer_id,
        selectedIds: state.selectedIds.filter(el => el !== action.payload.id),
      };
    default:
      return state;
  }
};

export default groupOffer;
