import { REMOVE_FROM_CART, SEND_OFFER_SUCCESS } from '../actions/constants';

const successMessage = (state = '', action) => {
  switch (action.type) {
    case SEND_OFFER_SUCCESS:
      return 'Offer Sent!';
    case REMOVE_FROM_CART:
      return '';
    default:
      return state;
  }
};

export default successMessage;
