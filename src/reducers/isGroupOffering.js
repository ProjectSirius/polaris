import { CREATE_GROUP_OFFER } from '../actions/constants';
const isGroupOffering = (state = false, action) => {
  switch (action.type) {
    case CREATE_GROUP_OFFER:
      return true;
    default:
      return state;
  }
};
export default isGroupOffering;
