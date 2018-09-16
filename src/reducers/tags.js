import { DETAILS_RECEIVE_SUCCESS } from '../actions/constants';

const tags = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAG':
      return [...state, action.payload.tags];
    case 'REMOVE_TAG':
      return [...action.payload.tags];
    case DETAILS_RECEIVE_SUCCESS:
      return window.location.pathname.split('/').includes('edit')
        ? JSON.parse(
            action.payload.data.fields.filter(el => +el.idField === 28)[0].value
          )
        : state;
    case 'DELETE_ALL_TAGS':
      return [];
    default:
      return state;
  }
};

export default tags;
