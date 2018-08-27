import {
  TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAILURE,
} from './constants';
import axios from 'axios';

const transactionRequest = isRequesting => ({
  type: TRANSACTION_REQUEST,
  payload: { isRequesting },
});

const transactionReceiveSuccess = data => ({
  type: TRANSACTION_SUCCESS,
  payload: { data },
});

const transactionReceiveFailure = error => ({
  type: TRANSACTION_FAILURE,
  payload: { error },
});

const getTransaction = () => dispatch => {
  dispatch(transactionRequest(true));

  return axios
    .get('https://5b7e8126adf2070014bfa378.mockapi.io/transactions')
    .then(payload => dispatch(transactionReceiveSuccess(payload.data)))
    .catch(err => dispatch(transactionReceiveFailure(err)));
};

export default getTransaction;
