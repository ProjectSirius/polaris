import {
  SEND_OFFER_REQUEST,
  SEND_OFFER_FAILURE,
  SEND_OFFER_SUCCESS,
} from './constants';
import { doPost } from '../api/request';

const sendOfferRequest = isRequesting => ({
  type: SEND_OFFER_REQUEST,
  payload: { isRequesting },
});

export const sendOfferSuccess = data => ({
  type: SEND_OFFER_SUCCESS,
  payload: { data },
});

const sendOfferFailure = error => ({
  type: SEND_OFFER_FAILURE,
  payload: { error },
});

const sendOffer = data => (dispatch, getState) => {
  dispatch(sendOfferRequest(true));

  const buyerId = getState().currentUser.id;
  const type = getState().currentUser.type;
  const price = data.fields
    ? data.fields.filter(el => +el.idField === 16)[0]
      ? data.fields.filter(el => +el.idField === 16)[0].value
      : 0
    : 0;

  const id =
    type !== 'audience_owner'
      ? { idChannel: +data.id }
      : {
          idContent: +data.id,
        };

  const dataToBeSent = {
    idBuyer: +buyerId,
    price: +price,
    createdBy: +data.createdBy,
    IdOrderStatus: 1,
    modifiedBy: +data.modifiedBy,
    ...id,
  };

  const url =
    getState().currentUser.type === 'content_owner'
      ? 'preorder-channel'
      : 'preorder-content';
  doPost(url, dataToBeSent)
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      return dispatch(sendOfferSuccess(data));
    })
    .catch(error => dispatch(sendOfferFailure(error)));
};

export default sendOffer;
