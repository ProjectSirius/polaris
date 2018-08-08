import { createSelector } from 'reselect';

const selectLanguage = createSelector(state => state.lang, lang => lang);

export default selectLanguage;
