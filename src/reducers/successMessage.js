import { SEND_OFFER_SUCCESS } from '../actions/constants';

const successMessage = (state = '', action) => {
  switch (action.type) {
    case SEND_OFFER_SUCCESS:
      return 'Offer Sent!';
    default:
      return state;
  }
};

export default successMessage;
