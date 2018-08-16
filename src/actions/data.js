import {
  DATA_REQUEST,
  DATA_RECEIVE_SUCCESS,
  DATA_RECEIVE_FAILURE,
} from './constants';
import get from '../helpers/axiosWrapper';

const dataRequest = isRequesting => ({
  type: DATA_REQUEST,
  payload: { isRequesting },
});

const dataReceiveSuccess = data => ({
  type: DATA_RECEIVE_SUCCESS,
  payload: { data },
});

const dataReceiveFailure = error => ({
  type: DATA_RECEIVE_FAILURE,
  payload: { error },
});

const getData = (dataType, query = '') => dispatch => {
  let url = !query
    ? `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}`
    : `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}?q=${query}`;
  dispatch(dataRequest(true));
  return get(url)
    .then(payload => dispatch(dataReceiveSuccess(payload.data)))
    .catch(err => dispatch(dataReceiveFailure(err)));
};

export default getData;
