import { ADD_TO_GROUP_OFFER, REMOVE_FROM_GROUP_OFFER } from './constants';

export const addOffer = (id, buyer_id) => ({
  type: ADD_TO_GROUP_OFFER,
  payload: { id, buyer_id },
});

export const removeOffer = (id, buyer_id) => ({
  type: REMOVE_FROM_GROUP_OFFER,
  payload: { id, buyer_id },
});

export const addToGroupOffer = id => (dispatch, getState) => {
  const buyer_id = getState().currentUser.id;
  dispatch(addOffer(id, buyer_id));
};

export const removeFromGroupOffer = id => (dispatch, getState) => {
  const buyer_id = getState().currentUser.id;
  dispatch(removeOffer(id, buyer_id));
};
