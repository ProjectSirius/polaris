import {
  DATA_REQUEST,
  DATA_RECEIVE_SUCCESS,
  DATA_RECEIVE_FAILURE,
} from './constants';
import { doPost } from '../api/request';
import { selectChoosenGenres, selectRating } from '../selectors';

const dataRequest = isRequesting => ({
  type: DATA_REQUEST,
  payload: { isRequesting },
});

const dataReceiveSuccess = payload => ({
  type: DATA_RECEIVE_SUCCESS,
  payload: {
    info: payload.data,
    totalPages: payload.totalPages,
    currentPage: payload.page,
  },
});

const dataReceiveFailure = error => ({
  type: DATA_RECEIVE_FAILURE,
  payload: { error },
});

const getData = (searchValue, page = 1) => (dispatch, getState) => {
  const dataType =
    getState().currentUser.type === 'content_owner'
      ? 'channels/search'
      : 'contents/search';

  /* eslint-disable */
  const search = searchValue;
  const rating = selectRating(getState());
  const genres = selectChoosenGenres(getState());
  /* eslint-enable */

  dispatch(dataRequest(true));

  return doPost(dataType, {
    page,
    query: search,
  })
    .then(payload => {
      return dispatch(dataReceiveSuccess(payload));
    })
    .catch(err => dispatch(dataReceiveFailure(err)));
};

export default getData;
