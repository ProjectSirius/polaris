import { createSelector } from 'reselect';

export const selectData = state => state.data;
export const selectIsOpenMainMenu = state => state.isOpenMainMenu;
export const selectIsRequesting = state => state.isRequesting;
export const selectCurrentUser = state => state.currentUser;
export const selectLanguage = state => state.lang;
export const selectIsSignUp = state => state.isSignUp;
export const selectError = state => state.error;
export const selectFilteringPageRating = state => state.filteringPage.rating;
export const selectFilteringPageFilterBar = state =>
  state.filteringPage.filterBar;

export const selectIsAuth = createSelector(
  selectCurrentUser,
  currentUser => currentUser !== null
);
