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
    channel: `channels/${id}`,
    content: `contents/${id}`,
  };

  let info = {};

  dispatch(dataRequest(true));
  return doGet(url[dataType])
    .then(payload => (info = payload.data))
    .then(data =>
      doGet(`users/${data.createdBy}`)
        .then(userData =>
          dispatch(
            dataInfoReceiveSuccess({ ...info, creator: userData.username })
          )
        )
        .catch(err => dispatch(dataReceiveFailure(err)))
    );
};
export default getDetails;
