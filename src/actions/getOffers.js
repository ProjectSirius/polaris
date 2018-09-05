import { OFFERS_REQUEST, OFFERS_SUCCESS, OFFERS_FAILURE } from './constants';
import axios from 'axios';

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

const getOffers = () => dispatch => {
  dispatch(offersRequest(true));

  return axios
    .get('http://www.mocky.io/v2/5b83e302310000de1e0d213d')
    .then(payload => dispatch(offersReceiveSuccess(payload.data)))
    .catch(err => dispatch(offersReceiveFailure(err)));
};

export default getOffers;
