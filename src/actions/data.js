import get from '../helpers/axiosWrapper';
import {
  dataRequest,
  dataReceiveFailure,
  dataReceiveSuccess,
} from '../helpers/dataRequests';

const getData = (dataType, query = '') => (dispatch, getState) => {
  // Ask if its's a right approach
  const filters = getState().filters;

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
