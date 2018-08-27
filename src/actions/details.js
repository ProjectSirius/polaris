import {
  DATA_REQUEST,
  DATA_RECEIVE_FAILURE,
  DETAILS_RECEIVE_SUCCESS,
} from './constants';
import { doGet } from '../api/request';

const dataRequest = isRequesting => ({
  type: DATA_REQUEST,
  payload: { isRequesting },
});

const dataReceiveFailure = error => ({
  type: DATA_RECEIVE_FAILURE,
  payload: { error },
});

const dataInfoReceiveSuccess = data => ({
  type: DETAILS_RECEIVE_SUCCESS,
  payload: { data },
});

const getDetails = (dataType, id) => dispatch => {
  const url = {
    channels: `channels/${id}`,
    contents: `contents/${id}`,
  };

  dispatch(dataRequest(true));
  return doGet(url[dataType])
    .then(payload => dispatch(dataInfoReceiveSuccess(payload.data)))
    .catch(err => dispatch(dataReceiveFailure(err)));
};
export default getDetails;
