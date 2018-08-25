import {
  DATA_REQUEST,
  DATA_RECEIVE_SUCCESS,
  DATA_RECEIVE_FAILURE,
} from './constants';
import get from '../helpers/axiosWrapper';
import { selectChoosenGenres, selectSearch, selectRating } from '../selectors';

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

const getData = (searchValue, genresValue) => (dispatch, getState) => {
  const dataType =
    getState().currentUser.userType === 'content_owner'
      ? 'channels'
      : 'contents';

  /* eslint-disable */
  const search = searchValue ? searchValue : selectSearch(getState());
  const rating = selectRating(getState());
  const genres = selectChoosenGenres(getState());
  /* eslint-enable */

  const url = `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}`;

  dispatch(dataRequest(true));

  return get(url)
    .then(payload => dispatch(dataReceiveSuccess(payload.data)))
    .catch(err => dispatch(dataReceiveFailure(err)));
};

export default getData;
