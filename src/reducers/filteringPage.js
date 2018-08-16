import {
  UPD_FILTER_BAR,
  UPD_RATING,
  TOGGLE_FILTER,
} from '../actions/constants';
import { combineReducers } from 'redux';

const isOpenFilterMenu = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return action.payload.isOpen;
    default:
      return state;
  }
};

// 3 options: table view, list view and map
const filterBar = (state = 'table', action) => {
  switch (action.type) {
    case UPD_FILTER_BAR:
      return action.payload.option;
    default:
      return state;
  }
};

const rating = (state = 1, action) => {
  switch (action.type) {
    case UPD_RATING:
      return action.payload.rating;
    default:
      return state;
  }
};

export default combineReducers({ filterBar, rating, isOpenFilterMenu });
