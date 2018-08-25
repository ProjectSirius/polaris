import {
  DATA_REQUEST,
  DATA_RECEIVE_SUCCESS,
  DATA_RECEIVE_FAILURE,
} from './constants';
import { doPost } from '../api/request';
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
    getState().currentUser.type === 'content_owner'
      ? 'channels/search'
      : 'contents/search';
  debugger;
  /* eslint-disable */
  const search = searchValue ? searchValue : selectSearch(getState());
  const rating = selectRating(getState());
  const genres = selectChoosenGenres(getState());
  /* eslint-enable */

  dispatch(dataRequest(true));

  return doPost(dataType, {
    page: 1,
    query: search,
  })
    .then(payload => {
      return dispatch(dataReceiveSuccess(payload.data));
    })
    .catch(err => dispatch(dataReceiveFailure(err)));
};

export default getData;
