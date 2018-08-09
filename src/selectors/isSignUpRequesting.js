import { createSelector } from 'reselect';

const selectIsSignUpRequesting = createSelector(
  state => state.isSignUpRequesting,
  isSignUpRequesting => isSignUpRequesting
);

export default selectIsSignUpRequesting;
