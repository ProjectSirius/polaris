import { CHANGE_LANG } from './constants';

const changeLang = lang => ({
  type: CHANGE_LANG,
  payload: {
    lang,
  },
});

export default changeLang;
