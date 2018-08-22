import { createSelector } from 'reselect';

export const selectData = state => state.data;
export const selectIsOpenMainMenu = state => state.isOpenMainMenu;
export const selectIsRequesting = state => state.isRequesting;
export const selectCurrentUser = state => state.currentUser;
export const selectLanguage = state => state.lang;
export const selectIsSignUp = state => state.isSignUp;
export const selectError = state => state.error;
export const selectFilteringPageRating = state => state.filteringPage.rating;
export const selectNotif = state => state.notif;
export const selectNotifLength = state =>
  state.notif ? state.notif.length : 0;
export const selectIsOpenFilterMenu = state =>
  state.filteringPage.isOpenFilterMenu;
export const selectFilteringPageFilterBar = state =>
  state.filteringPage.filterBar;
export const selectRating = state => state.filterBar.rating;
export const selectOption = state => state.form.SelectOptionFilter_form;
export const selectTags = state => state.tags;
export const selectDetailed = state => state.detailed;
export const selectIsEditing = state => state.isEditing;

export const selectIsAuth = createSelector(
  selectCurrentUser,
  currentUser => currentUser !== null
);
