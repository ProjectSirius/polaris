import { SEND_OFFER_REQUEST } from './constants';
/*import { doPost } from '../api/request';*/

const sendOfferRequest = isRequesting => ({
  type: SEND_OFFER_REQUEST,
  payload: { isRequesting },
});

/*export const sendOfferSuccess = data => ({
  type: SEND_OFFER_SUCCESS,
  payload: { data },
});

const sendOfferFailure = error => ({
  type: SEND_OFFER_FAILURE,
  payload: { error },
});*/

const sendOffer = (data, selector) => dispatch => {
  dispatch(sendOfferRequest(true));

  /*  doPost(url[selector], {

  })
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      return dispatch(sendOfferSuccess(data.user));
    })
    .catch(error => dispatch(sendOfferFailure(error)));*/
};

export default sendOffer;
