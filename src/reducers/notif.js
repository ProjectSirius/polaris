import { NOTIF_SUCCESS } from '../actions/constants';

const notif = (state = [], action) => {
  switch (action.type) {
    case NOTIF_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default notif;
