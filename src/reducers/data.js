import { DATA_RECEIVE_SUCCESS } from '../actions/constants';

const data = (state = { info: [], totalPages: 0, currentPage: 0 }, action) => {
  switch (action.type) {
    case DATA_RECEIVE_SUCCESS:
      return {
        ...state,
        info: state.info.concat(action.payload.info),
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
      };
    default:
      return state;
  }
};

export default data;
