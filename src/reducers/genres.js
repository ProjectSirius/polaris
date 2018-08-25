import { GENRES_SUCCESS, TOGGLE_GENRE } from '../actions/constants';

const genres = (state = [], action) => {
  switch (action.type) {
    case GENRES_SUCCESS:
      return action.payload.data.map(el => ({ ...el, checked: false }));
    case TOGGLE_GENRE:
      return action.payload.data.map(
        el =>
          el.id === action.payload.id
            ? { ...el, checked: !action.payload.value }
            : el
      );
    default:
      return state;
  }
};

export default genres;
