import {
  ADD_TO_GROUP_OFFER,
  REMOVE_FROM_GROUP_OFFER,
} from '../actions/constants';
const isGroupOffering = (state = false, action) => {
  switch (action.type) {
    case ADD_TO_GROUP_OFFER:
      return true;
    case REMOVE_FROM_GROUP_OFFER:
      return false;
    default:
      return state;
  }
};
export default isGroupOffering;
