import { OFFERS_REQUEST, OFFERS_SUCCESS, OFFERS_FAILURE } from './constants';
import { doGet } from '../api/request';

const offersRequest = isRequesting => ({
  type: OFFERS_REQUEST,
  payload: { isRequesting },
});

const offersReceiveSuccess = data => ({
  type: OFFERS_SUCCESS,
  payload: { data },
});

const offersReceiveFailure = error => ({
  type: OFFERS_FAILURE,
  payload: { error },
});

const getOffers = () => (dispatch, getState) => {
  dispatch(offersRequest(true));

  const preorderUrl =
    getState().currentUser.type === 'content_owner'
      ? 'preorder-channel/buyer'
      : 'preorder-content/buyer';

  return doGet(preorderUrl)
    .then(payload => {
      return dispatch(offersReceiveSuccess(payload));
    })
    .catch(err => dispatch(offersReceiveFailure(err)));
};

export default getOffers;
