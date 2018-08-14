import { UPD_RATING } from './constants';

const updRating = rating => ({
  type: UPD_RATING,
  payload: {
    rating,
  },
});

export default updRating;
