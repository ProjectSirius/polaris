import {
  DATA_RECEIVE_FAILURE,
  DATA_RECEIVE_SUCCESS,
  DATA_REQUEST,
} from '../actions/constants';

export const dataRequest = isRequesting => ({
  type: DATA_REQUEST,
  payload: { isRequesting },
});

export const dataReceiveSuccess = data => ({
  type: DATA_RECEIVE_SUCCESS,
  payload: { data },
});

export const dataReceiveFailure = error => ({
  type: DATA_RECEIVE_FAILURE,
  payload: { error },
});
