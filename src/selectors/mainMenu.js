import { createSelector } from 'reselect';

const selectIsOpenMainMenu = createSelector(
  state => state.isOpenMainMenu,
  isOpen => isOpen
);

export default selectIsOpenMainMenu;
