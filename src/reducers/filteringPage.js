import { UPD_FILTER_BAR, UPD_RATING } from '../actions/constants';
import { combineReducers } from 'redux';

// 3 options: table view, list view and map
const filterBar = (state = 'table', action) => {
  switch (action.type) {
    case UPD_FILTER_BAR:
      return action.payload.option;
    default:
      return state;
  }
};

const rating = (state = 0, action) => {
  switch (action.type) {
    case UPD_RATING:
      return action.payload.rating;
    default:
      return state;
  }
};

export default combineReducers({ filterBar, rating });
