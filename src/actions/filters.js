import { ADD_FILTER } from './constants';

const addFilter = filter => ({
  type: ADD_FILTER,
  payload: { filter },
});

const setFilters = filter => dispatch => {
  dispatch(addFilter(filter));
};

export default setFilters;
