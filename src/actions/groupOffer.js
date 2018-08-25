import { ADD_TO_GROUP_OFFER, REMOVE_FROM_GROUP_OFFER } from './constants';

export const addToGroupOffer = id => ({
  type: ADD_TO_GROUP_OFFER,
  payload: { id },
});

export const removeFromGroupOffer = id => ({
  type: REMOVE_FROM_GROUP_OFFER,
  payload: { id },
});
