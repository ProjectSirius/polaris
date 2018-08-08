import { createSelector } from 'reselect';

export const selectSignUp = state => state.isSignUp;

export const selectIsSignUp = createSelector(
  selectSignUp,
  isSignUp => isSignUp
);
