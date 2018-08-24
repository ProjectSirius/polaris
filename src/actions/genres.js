import axios from 'axios';

import {
  GENRES_FAILURE,
  GENRES_REQUEST,
  GENRES_SUCCESS,
  TOGGLE_GENRE,
} from './constants';

const genresReceive = data => ({
  type: GENRES_SUCCESS,
  payload: { data },
});

const genresRequest = data => ({
  type: GENRES_REQUEST,
  payload: { data },
});

const genresReceiveFailure = error => ({
  type: GENRES_FAILURE,
  payload: { error },
});

export const toggleGenre = (id, bool, data) => ({
  type: TOGGLE_GENRE,
  payload: { id, value: bool, data },
});

const getGenres = () => dispatch => {
  dispatch(genresRequest(true));

  return axios
    .get('http://5b7e8126adf2070014bfa378.mockapi.io/genres')
    .then(payload => dispatch(genresReceive(payload.data)))
    .catch(err => dispatch(genresReceiveFailure(err)));
};

export default getGenres;
