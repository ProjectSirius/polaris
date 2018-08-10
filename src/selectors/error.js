import { createSelector } from 'reselect';

const selectError = createSelector(state => state.error, error => error);

export default selectError;
