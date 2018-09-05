import { doGet } from '../api/request';

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
  doGet('/admin/fields')
    .then(payload => {
      const a = payload.data.filter(
        el => (el.name = 'Ganre' && el.idFieldType === '4')
      );
      return dispatch(genresReceive(eval(a[0].options)));
    })
    .catch(err => dispatch(genresReceiveFailure(err)));
};

export default getGenres;
