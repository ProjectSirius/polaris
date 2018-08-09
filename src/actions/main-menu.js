import { TOGGLE_MENU } from './constants';

const toggleMenu = isOpen => ({
  type: TOGGLE_MENU,
  payload: {
    isOpen,
  },
});

export default toggleMenu;
