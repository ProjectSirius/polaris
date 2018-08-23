import { ADD_TO_GROUP_OFFER } from './constants';
const groupOffer = selected => ({
  type: ADD_TO_GROUP_OFFER,
  payload: { selected },
});
export default groupOffer;
