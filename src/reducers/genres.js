import { GENRES_SUCCESS } from '../actions/constants';

const genres = (state = [], action) => {
  switch (action.type) {
    case GENRES_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default genres;
