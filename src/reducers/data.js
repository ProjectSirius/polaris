import { DATA_RECEIVE_SUCCESS } from '../actions/constants';

const data = (state = { info: {}, totalPages: 0, currentPage: 0 }, action) => {
  switch (action.type) {
    case DATA_RECEIVE_SUCCESS:
      const newState = action.payload.info.reduce(
        (acc, info) => ({
          ...acc,
          [info.id]: info,
        }),
        {}
      );
      if (action.payload.selector === 'search') {
        return {
          ...state,
          info: { ...newState },
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
        };
      }

      return {
        ...state,
        info: { ...state.info, ...newState },
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
      };
    default:
      return state;
  }
};

export default data;
