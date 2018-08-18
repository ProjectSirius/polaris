import { TOGGLE_FILTER } from './constants';

const toggleFilter = isOpen => ({
  type: TOGGLE_FILTER,
  payload: {
    isOpen,
  },
});

export default toggleFilter;
