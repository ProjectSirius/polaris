import {
  USER_DATA_FAILURE,
  USER_DATA_SUCCESS,
  USER_DATA_REQUEST,
} from './constants';
import { doGet } from '../api/request';

const dataRequest = isRequesting => ({
  type: USER_DATA_REQUEST,
  payload: { isRequesting },
});

const dataReceiveSuccess = data => ({
  type: USER_DATA_SUCCESS,
  payload: { data },
});

const dataReceiveFailure = error => ({
  type: USER_DATA_FAILURE,
  payload: { error },
});

const getUserData = () => (dispatch, getState) => {
  const dataType =
    getState().currentUser.type === 'content_owner' ? `contents` : `channels`;

  dispatch(dataRequest(true));

  return doGet(dataType)
    .then(payload => {
      return dispatch(dataReceiveSuccess(payload.data));
    })
    .catch(err => dispatch(dataReceiveFailure(err)));
};

export default getUserData;
