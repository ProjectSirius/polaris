import { DATA_RECEIVE_SUCCESS } from '../actions/constants';

const uniqueArray = array => {
  let data = array.concat();
  for (let i = 0; i < data.length; ++i) {
    for (let j = i + 1; j < data.length; ++j) {
      if (data[i].id === data[j].id) data.splice(j--, 1);
    }
  }

  return data;
};

const data = (state = { info: [], totalPages: 0, currentPage: 0 }, action) => {
  switch (action.type) {
    case DATA_RECEIVE_SUCCESS:
      return {
        ...state,
        info: uniqueArray(state.info.concat(action.payload.info)),
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
      };
    default:
      return state;
  }
};

export default data;
