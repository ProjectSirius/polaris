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
export const selectRating = state => state.filterBar.rating;
export const selectMinPrice = state =>
  state.form.Price_range_form.values.min_price_range;
export const selectMaxPrice = state =>
  state.form.Price_range_form.values.max_price_range;
export const selectMinInitalPrice = state =>
  state.form.Price_range_form.initial.min_price_range;
export const selectMaxInitalPrice = state =>
  state.form.Price_range_form.initial.max_price_range;
export const selectOption = state => state.form.SelectOptionFilter_form;

export const selectIsAuth = createSelector(
  selectCurrentUser,
  currentUser => currentUser !== null
);
