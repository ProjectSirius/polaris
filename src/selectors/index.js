import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

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

export const priceRangeSelector = formValueSelector('Price_range_form');
export const selectOptionSelector = formValueSelector(
  'SelectOptionFilter_form'
);
export const checkboxFilterSelector = formValueSelector('CheckboxFilter_form');

export const selectMinPrice = state =>
  priceRangeSelector(state, 'min_price_range');
export const selectMaxPrice = state =>
  priceRangeSelector(state, 'max_price_range');
export const selectOption = state =>
  selectOptionSelector(state, 'selectedOption');
export const selectCheckboxOptions = state =>
  checkboxFilterSelector(state, 'checkbox1', 'checkbox2', 'checkbox3');

export const selectIsAuth = createSelector(
  selectCurrentUser,
  currentUser => currentUser !== null
);
