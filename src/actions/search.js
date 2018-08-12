import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from './constants';
import get from '../helpers/axiosWrapper';

const searchRequest = isRequesting => ({
  type: SEARCH_REQUEST,
  payload: { isRequesting },
});

const searchSuccess = data => ({ type: SEARCH_SUCCESS, payload: { data } });

const searchFailure = error => ({ type: SEARCH_FAILURE, payload: { error } });

const search = (dataType, query) => dispatch => {
  dispatch(searchRequest(true));
  return get(
    `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}?q=${query}`
  )
    .then(payload => dispatch(searchSuccess(payload.data)))
    .catch(err => dispatch(searchFailure(err)));
};

export default search;
