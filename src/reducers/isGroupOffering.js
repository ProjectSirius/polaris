import { GROUP_OFFER } from '../actions/constants';
const isGroupOffering = (state = false, action) => {
  switch (action.type) {
    case GROUP_OFFER:
      return true;
    default:
      return state;
  }
};
export default isGroupOffering;
