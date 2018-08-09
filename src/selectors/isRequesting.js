import { createSelector } from 'reselect';

const selectIsSignUpRequesting = createSelector(
  state => state.isRequesting,
  isRequesting => isRequesting
);

export default selectIsSignUpRequesting;
