import { ACCEPT_OFFER, DECLINE_OFFER } from './constants';
import {doPost} from '../api/request';

export const accept = (data) => ({
  type: ACCEPT_OFFER,
  payload: data
});

export const acceptOffer = (data) => dispatch => {
  doPost('', data)
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      return dispatch(accept(data));
    })
};

export const decline = (data) => ({
  type: DECLINE_OFFER,
  payload: data
});

export const declineOffer = (data) => dispatch => {
  doPost('', data)
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      return dispatch(decline(data));
    })
};

