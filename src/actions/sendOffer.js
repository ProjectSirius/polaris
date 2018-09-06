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

const sendOffer = data => dispatch => {
  dispatch(sendOfferRequest(true));

  doPost('', data)
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      return dispatch(sendOfferSuccess(data));
    })
    .catch(error => dispatch(sendOfferFailure(error)));
};

export default sendOffer;
