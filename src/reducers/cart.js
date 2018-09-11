import {
  CART_DATA_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../actions/constants';

const initialState = {
  buyer_id: null,
  selectedIds: [],
  cartData: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART_DATA_SUCCESS:
      return {
        ...state,
        buyer_id: action.payload.buyer_id,
        cartData: action.payload.data,
      };
    case ADD_TO_CART:
      return {
        ...state,
        buyer_id: action.payload.buyer_id,
        selectedIds: [...state.selectedIds, action.payload.id],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        buyer_id: action.payload.buyer_id,
        selectedIds: state.selectedIds.filter(el => {
          return el !== action.payload.id + '';
        }),
      };
    default:
      return state;
  }
};

export default cart;
