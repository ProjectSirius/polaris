const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// language
const CHANGE_LANG = 'CHANGE_LANG';

// menu
const TOGGLE_MENU = 'TOGGLE_MENU';

// log in
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const SAVE_TOKEN = 'SAVE_TOKEN';

// genres
const GENRES_REQUEST = 'GENRES_REQUEST';
const GENRES_SUCCESS = 'GENRES_SUCCESS';
const GENRES_FAILURE = 'GENRES_FAILURE';
const TOGGLE_GENRE = 'TOGGLE_GENRE';

// log out
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// data
const DATA_REQUEST = 'DATA_REQUEST';
const DATA_RECEIVE_SUCCESS = 'DATA_RECEIVE_SUCCESS';
const DATA_RECEIVE_FAILURE = 'DATA_RECEIVE_FAILURE';

//get user data
const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
const USER_DATA_SUCCESS = 'USER_DATA_RECEIVE';
const USER_DATA_FAILURE = 'USER_DATA_FAILURE';

// edit user data
const DATA_EDIT_REQUEST = 'DATA_EDIT_REQUEST';
const DATA_EDIT_SUCCESS = 'DATA_EDIT_SUCCESS';
const DATA_EDIT_FAILURE = 'DATA_EDIT_FAILURE';
const DATA_EDIT_REDIRECT = 'DATA_EDIT_REDIRECT';

// log in
const TRANSACTION_REQUEST = 'TRANSACTION_REQUEST';
const TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS';
const TRANSACTION_FAILURE = 'TRANSACTION_FAILURE';

// details
const DETAILS_RECEIVE_SUCCESS = 'DETAILS_RECEIVE_SUCCESS';

// notifications
const NOTIF_SUCCESS = 'NOTIF_SUCCESS';
const NOTIF_REQUEST = 'NOTIF_REQUEST';
const NOTIF_FAILURE = 'NOTIF_FAILURE';

// filtering page
const UPD_RATING = 'UPD_RATING';
const UPD_FILTER_BAR = 'UPD_FILTER_BAR';

const ADD_FILTER = 'ADD_FILTER';
const TOGGLE_FILTER = 'TOGGLE_FILTER';

// sending data to server
const DATA_SEND_REQUEST = 'DATA_SEND_REQUEST';
const DATA_SEND_SUCCESS = 'DATA_SEND_SUCCESS';
const DATA_SEND_FAILURE = 'DATA_SEND_FAILURE';
const DATA_DELETE_REQUEST = 'DATA_DELETE_REQUEST';
const DATA_DELETE_SUCCESS = 'DATA_DELETE_SUCCESS';
const DATA_DELETE_FAILURE = 'DATA_DELETE_FAILURE';

// group offer
const ADD_TO_GROUP_OFFER = 'ADD_TO_GROUP_OFFER';
const REMOVE_FROM_GROUP_OFFER = 'REMOVE_FROM_GROUP_OFFER';

const CREATE_GROUP_OFFER = 'CREATE_GROUP_OFFER';

// get offers
const OFFERS_REQUEST = 'OFFERS_REQUEST';
const OFFERS_SUCCESS = 'OFFERS_SUCCESS';
const OFFERS_FAILURE = 'OFFERS_FAILURE';

// send offer
const SEND_OFFER_REQUEST = 'SEND_OFFER_REQUEST';
const SEND_OFFER_SUCCESS = 'SEND_OFFER_SUCCESS';
const SEND_OFFER_FAILURE = 'SEND_OFFER_FAILURE';

// cart
const CART_DATA_SUCCESS = 'CART_DATA_SUCCESS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// address
const ADD_DATA_ADDRESS = 'ADD_DATA_ADDRESS';

export {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  CHANGE_LANG,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  TOGGLE_MENU,
  DATA_REQUEST,
  DATA_RECEIVE_SUCCESS,
  DATA_RECEIVE_FAILURE,
  UPD_RATING,
  UPD_FILTER_BAR,
  ADD_FILTER,
  TOGGLE_FILTER,
  DATA_SEND_REQUEST,
  DATA_SEND_SUCCESS,
  DATA_SEND_FAILURE,
  NOTIF_SUCCESS,
  NOTIF_FAILURE,
  NOTIF_REQUEST,
  TRANSACTION_FAILURE,
  TRANSACTION_REQUEST,
  TRANSACTION_SUCCESS,
  DETAILS_RECEIVE_SUCCESS,
  ADD_TO_GROUP_OFFER,
  REMOVE_FROM_GROUP_OFFER,
  GENRES_FAILURE,
  GENRES_REQUEST,
  GENRES_SUCCESS,
  TOGGLE_GENRE,
  SAVE_TOKEN,
  OFFERS_REQUEST,
  OFFERS_SUCCESS,
  OFFERS_FAILURE,
  CART_DATA_SUCCESS,
  CREATE_GROUP_OFFER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  USER_DATA_FAILURE,
  USER_DATA_SUCCESS,
  USER_DATA_REQUEST,
  DATA_DELETE_REQUEST,
  DATA_DELETE_SUCCESS,
  DATA_DELETE_FAILURE,
  DATA_EDIT_FAILURE,
  DATA_EDIT_REQUEST,
  DATA_EDIT_SUCCESS,
  DATA_EDIT_REDIRECT,
  ADD_DATA_ADDRESS,
  SEND_OFFER_REQUEST,
  SEND_OFFER_SUCCESS,
  SEND_OFFER_FAILURE,
};
