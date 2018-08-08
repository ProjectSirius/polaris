import { createSelector } from 'reselect';

const selectCurrentUser = createSelector(
  state => state.currentUser,
  currentUser => currentUser
);

export default selectCurrentUser;
