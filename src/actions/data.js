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

const getData = (query = '') => (dispatch, getState) => {
  // Ask if its's a right approach
  const filters = getState().filters;
  const dataType =
    getState().currentUser.userType === 'content_owner'
      ? 'channels'
      : 'contents';

  let filtersQuery = !filters
    ? ''
    : filters.reduce((acc, el) => {
        if (!el.value) return null;
        return acc + ('&' + el.filterName + '=' + el.value);
      }, '');

  let url = !query
    ? `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}`
    : `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}?q=${query}`;

  if (!query && !filtersQuery) {
    url = `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}`;
  } else if (!query && filtersQuery) {
    url = `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}${filtersQuery}`;
  } else if (query && !filtersQuery) {
    url = `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}?q=${query}`;
  } else if (query && filtersQuery) {
    url = `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}?q=${query}${filtersQuery}`;
  }

  dispatch(dataRequest(true));

  return get(url)
    .then(payload => dispatch(dataReceiveSuccess(payload.data)))
    .catch(err => dispatch(dataReceiveFailure(err)));
};

export default getData;
