import { createSelector } from 'reselect';

const selectCurrentUser = state => state.currentUser;

const selectIsAuth = createSelector(
  selectCurrentUser,
  currentUser => currentUser !== null
);

export default selectIsAuth;
