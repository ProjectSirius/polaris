import { CHANGE_LANG } from '../actions/constants';

const lang = (state = 'en', action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return action.payload.lang;
    default:
      return state;
  }
};

export default lang;
