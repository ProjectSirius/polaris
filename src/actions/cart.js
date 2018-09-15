import {
  DATA_REQUEST,
  DATA_RECEIVE_FAILURE,
  CART_DATA_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './constants';
import { doPost } from '../api/request';

const dataRequest = isRequesting => ({
  type: DATA_REQUEST,
  payload: { isRequesting },
});

const dataReceiveFailure = error => ({
  type: DATA_RECEIVE_FAILURE,
  payload: { error },
});

const cartDataSuccess = (data, buyer_id) => ({
  type: CART_DATA_SUCCESS,
  payload: { data, buyer_id },
});

export const addOffer = (id, buyer_id) => ({
  type: ADD_TO_CART,
  payload: { id, buyer_id },
});

export const addToCart = id => (dispatch, getState) => {
  const buyer_id = getState().currentUser.id;
  dispatch(addOffer(id, buyer_id));
};

export const removeOffer = (id, buyer_id) => ({
  type: REMOVE_FROM_CART,
  payload: { id, buyer_id },
});

export const removeFromCart = id => (dispatch, getState) => {
  const buyer_id = getState().currentUser.id;
  dispatch(removeOffer(id, buyer_id));
};

export const cart = () => (dispatch, getState) => {
  const dataType =
    getState().currentUser.type === 'content_owner'
      ? 'channels/search'
      : 'contents/search';

  const buyer_id = getState().currentUser.id;

  const ids = getState().cart.selectedIds;

  dispatch(dataRequest(true));

  return doPost(dataType, {
    page: 1,
    query: '',
  })
    .then(payload => {
      return dispatch(
        cartDataSuccess(
          payload.data.filter(el => ids.includes(el.id)),
          buyer_id
        )
      );
    })
    .catch(err => dispatch(dataReceiveFailure(err)));
};
