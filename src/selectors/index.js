import { createSelector } from 'reselect';

export const selectData = state => state.data;
export const selectUserData = state => state.userData;
export const selectTransaction = state => state.transactions;
export const selectIsOpenMainMenu = state => state.isOpenMainMenu;
export const selectIsRequesting = state => state.isRequesting;
export const selectCurrentUser = state => state.currentUser;
export const selectLanguage = state => state.lang;
export const selectIsSignUp = state => state.isSignUp;
export const selectError = state => state.error;
export const selectGenres = state => state.genres;
export const selectFilteringPageRating = state => state.filteringPage.rating;
export const selectNotif = state => state.notif;
export const selectLastOfferedId = state => state.lastOfferedId;
export const selectSuccessMessage = state => state.successMessage;
export const selectNotifLength = state =>
  state.notif ? state.notif.length : 0;
export const selectSearch = state =>
  state.form.Search_Form && state.form.Search_Form.values
    ? state.form.Search_Form.values.search
    : '';
export const selectIsOpenFilterMenu = state =>
  state.filteringPage.isOpenFilterMenu;
export const selectFilteringPageFilterBar = state =>
  state.filteringPage.filterBar;
export const selectRating = state =>
  state.filteringPage ? state.filteringPage.rating : 1;
export const selectTags = state => state.tags;
export const selectDetails = state => state.details;
export const selectIsEditing = state => state.isEditing;
export const groupOffer = state => state.groupOffer;
export const selectIsGroupOffering = state => state.isGroupOffering;
export const selectIsDataSent = state => state.isDataSent;
export const selectOffers = state => state.offers;
export const selectCart = state => state.cart;
export const selectAddress = state => state.newDataAddress;

export const selectIsAuth = createSelector(
  selectCurrentUser,
  currentUser => currentUser !== null
);

export const selectChoosenGenres = createSelector(selectGenres, genres =>
  genres.filter(({ checked }) => checked)
);

export const selectEditDetails = createSelector(
  selectDetails,
  selectDetails => {
    const fields = selectDetails.hasOwnProperty('fields')
      ? selectDetails.fields.reduce((acc, el) => {
          switch (+el.idField) {
            case 16:
              return { ...acc, price: el.value };
            case 21:
              return { ...acc, url: el.value };
            case 22:
              return { ...acc, videoUrl: el.value };
            case 23:
              return { ...acc, imgUrl: el.value };
            case 25:
              return { ...acc, perUnit: el.value };
            case 26:
              return { ...acc, unit: el.value };
            case 28:
              return { ...acc, tags: el.tags };
            default:
              return acc;
          }
        }, {})
      : [];
    return window.location.pathname.split('/').includes('edit')
      ? { ...selectDetails, ...fields }
      : {};
  }
);

export const selectCartLength = createSelector(
  selectCart,
  cart => cart.selectedIds.length
);
