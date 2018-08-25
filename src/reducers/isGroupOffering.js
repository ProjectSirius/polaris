import { ADD_TO_GROUP_OFFER } from '../actions/constants';
const isGroupOffering = (state = false, action) => {
  switch (action.type) {
    case ADD_TO_GROUP_OFFER:
      return true;
    default:
      return state;
  }
};
export default isGroupOffering;
