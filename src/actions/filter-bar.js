import { UPD_FILTER_BAR } from './constants';

const updFilterBar = option => ({
  type: UPD_FILTER_BAR,
  payload: {
    option,
  },
});

export default updFilterBar;
