import {
  TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAILURE,
  TRANSACTION_USER,
} from './constants';
import { doGet } from '../api/request';

const transactionRequest = isRequesting => ({
  type: TRANSACTION_REQUEST,
  payload: { isRequesting },
});

const transactionReceiveUser = user => ({
  type: TRANSACTION_USER,
  payload: { user },
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
    .then(async payload => {
      const userIds = payload.map(({ idBuyer }) => idBuyer);

      await userIds.map(
        async id =>
          await doGet(`users/${id}`).then(u =>
            dispatch(transactionReceiveUser(u))
          )
      );

      const res = payload.map((el, i) => ({
        ...el,
      }));

      return dispatch(transactionReceiveSuccess(res));
    })
    .catch(err => dispatch(transactionReceiveFailure(err)));
};

export default getTransaction;
