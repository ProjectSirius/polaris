import {
  TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAILURE,
} from './constants';
import { doGet } from '../api/request';

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

const getTransaction = () => (dispatch, getState) => {
  dispatch(transactionRequest(true));

  const preorderUrl =
    getState().currentUser.type === 'content_owner'
      ? 'preorder-content/seller'
      : 'preorder-channel/seller';

  return doGet(preorderUrl)
    .then(payload => {
      return dispatch(transactionReceiveSuccess(payload));
    })
    .catch(err => dispatch(transactionReceiveFailure(err)));
};

export default getTransaction;
