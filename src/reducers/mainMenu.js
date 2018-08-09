import { TOGGLE_MENU } from '../actions/constants';

const isOpenMainMenu = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return action.payload.isOpen;
    default:
      return state;
  }
};

export default isOpenMainMenu;
