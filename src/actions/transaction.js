import {
  SEND_TRANSACTION_FAILURE,
  SEND_TRANSACTION_SUCCESS,
  SEND_TRANSACTION_REQUEST,
  SEND_TRANSACTION_DECLINE,
} from './constants';
import { doPost, doDelete } from '../api/request';

const sendOfferRequest = isRequesting => ({
  type: SEND_TRANSACTION_REQUEST,
  payload: { isRequesting },
});

export const sendOfferSuccess = data => ({
  type: SEND_TRANSACTION_SUCCESS,
  payload: { data },
});

const sendOfferFailure = error => ({
  type: SEND_TRANSACTION_FAILURE,
  payload: { error },
});

const sendDecline = error => ({
  type: SEND_TRANSACTION_DECLINE,
  payload: { error },
});

export const declineOffer = data => (dispatch, getState) => {
  dispatch(sendDecline(true));
};

const approveOffer = data => (dispatch, getState) => {
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
      ? 'order-channel'
      : 'order-content';

  const delUrl =
    getState().currentUser.type === 'content_owner'
      ? 'preorder-content'
      : 'preorder-channel';

  doPost(url, dataToBeSent)
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      dispatch(sendOfferSuccess(data));
      return data;
    })
    .then(data => {
      doDelete(delUrl, {
        [getState().currentUser.type === 'content_owner'
          ? 'idContent'
          : 'idChannel']: data.id,
      });
    })
    .catch(error => dispatch(sendOfferFailure(error)));
};

export default approveOffer;
