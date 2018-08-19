import {
  DETAILED_REQUEST,
  DETAILED_RECEIVE_SUCCESS,
  DETAILED_RECEIVE_FAILURE,
} from './constants';
import get from '../helpers/axiosWrapper';

const detRequest = isRequesting => ({
  type: DETAILED_REQUEST,
  payload: { isRequesting },
});

const detReceiveSuccess = data => ({
  type: DETAILED_RECEIVE_SUCCESS,
  payload: { data },
});

const detdataReceiveFailure = error => ({
  type: DETAILED_RECEIVE_FAILURE,
  payload: { error },
});

const getDetailed = (dataType, id) => dispatch => {
  let url = `https://my-json-server.typicode.com/NarGhuk/my-json-server/${dataType}/${id}`;
  dispatch(detRequest(true));
  return get(url)
    .then(payload => dispatch(detReceiveSuccess(payload.data)))
    .catch(err => dispatch(detdataReceiveFailure(err)));
};

export default getDetailed;
