import {
  DATA_REQUEST,
  DATA_RECEIVE_SUCCESS,
  DATA_RECEIVE_FAILURE,
} from './constants';
import { doPost } from '../api/request';
import {
  selectChoosenGenres,
  selectRating,
  selectMinPrice,
  selectMaxPrice,
} from '../selectors';

const contains = (target, pattern) => {
  let value = 0;
  pattern.forEach(function(word) {
    value = value + target.includes(word);
  });
  return value === 1;
};

const dataRequest = isRequesting => ({
  type: DATA_REQUEST,
  payload: { isRequesting },
});

const dataReceiveSuccess = (payload, selector) => {
  return {
    type: DATA_RECEIVE_SUCCESS,
    payload: {
      info: payload.data,
      totalPages: payload.totalPages,
      currentPage: payload.page,
      selector,
    },
  };
};

const dataReceiveFailure = error => ({
  type: DATA_RECEIVE_FAILURE,
  payload: { error },
});

const getData = (searchValue, page = 1, selector) => (dispatch, getState) => {
  const dataType =
    getState().currentUser.type === 'content_owner'
      ? 'channels/search'
      : 'contents/search';

  /* eslint-disable */
  const search = searchValue;
  const rating = selectRating(getState());
  const genres = selectChoosenGenres(getState());
  const minPrice = selectMinPrice(getState());
  const maxPrice = selectMaxPrice(getState());

  let min, max;

  if (+minPrice > +maxPrice) {
    max = +minPrice;
    min = +maxPrice;
  } else {
    min = +minPrice;
    max = +maxPrice;
  }

  dispatch(dataRequest(true));
  const mappedGenres = genres.map(el => el.el);
  return doPost(dataType, {
    page,
    query: search,
  })
    .then(payload => {
      let filteredGenres = payload.data.filter(
        el =>
          el.fields.filter(
            el =>
              el.idField === '16' && +el.value >= +min && +el.value <= +max
                ? el
                : false
          ).length !== 0
            ? el.fields.filter(el => {
                return (
                  el.idField === '28' &&
                  contains(
                    el.value,
                    mappedGenres.length === 0 ? [''] : mappedGenres
                  )
                );
              }).length !== 0
              ? el
              : false
            : false
      );

      let data;

      if (genres.length !== 0 || min > 1 || max < 10000) {
        data = {
          data: filteredGenres,
          page: payload.page,
          totalCount: payload.totalCount,
          totalPages: payload.totalPages,
        };
      } else data = payload;

      return dispatch(dataReceiveSuccess(data, selector));
    })
    .catch(err => dispatch(dataReceiveFailure(err)));
};

export default getData;
