import { createSelector } from 'reselect';

export const selectSignUp = state => state.isSignUp;

const selectIsSignUp = createSelector(selectSignUp, isSignUp => isSignUp);

export default selectIsSignUp;
