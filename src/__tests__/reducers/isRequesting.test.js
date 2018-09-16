import isRequesting from '../../reducers/isRequesting';

import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_FAILURE,
  DATA_REQUEST,
  DATA_RECEIVE_SUCCESS,
  DATA_RECEIVE_FAILURE,
  DATA_SEND_REQUEST,
  DATA_SEND_SUCCESS,
  DATA_SEND_FAILURE,
  TRANSACTION_REQUEST,
  TRANSACTION_FAILURE,
  TRANSACTION_SUCCESS,
  NOTIF_REQUEST,
  NOTIF_FAILURE,
  NOTIF_SUCCESS,
  DETAILS_RECEIVE_SUCCESS,
  CART_DATA_SUCCESS,
  USER_DATA_FAILURE,
  USER_DATA_SUCCESS,
  USER_DATA_REQUEST,
  SEND_OFFER_REQUEST,
  SEND_OFFER_SUCCESS,
  SEND_OFFER_FAILURE,
} from '../../actions/constants';

test('return state on non-action', () => {
  expect(isRequesting(false, {})).toEqual(false);
});

test('DETAILS_RECEIVE_SUCCESS', () => {
  expect(isRequesting(true, { type: DETAILS_RECEIVE_SUCCESS })).toEqual(false);
});

test('CART_DATA_SUCCESS', () => {
  expect(isRequesting(true, { type: CART_DATA_SUCCESS })).toEqual(false);
});

describe('sign up', () => {
  test('SIGN_UP_REQUEST', () => {
    expect(isRequesting(false, { type: SIGN_UP_REQUEST })).toEqual(true);
  });

  test('SIGN_UP_SUCCESS', () => {
    expect(isRequesting(true, { type: SIGN_UP_SUCCESS })).toEqual(false);
  });

  test('SIGN_UP_FAILURE', () => {
    expect(isRequesting(true, { type: SIGN_UP_FAILURE })).toEqual(false);
  });
});

describe('login', () => {
  test('LOGIN_REQUEST', () => {
    expect(isRequesting(false, { type: LOGIN_REQUEST })).toEqual(true);
  });

  test('LOGOUT_SUCCESS', () => {
    expect(isRequesting(true, { type: LOGOUT_SUCCESS })).toEqual(false);
  });

  test('LOGIN_FAILURE', () => {
    expect(isRequesting(true, { type: LOGIN_FAILURE })).toEqual(false);
  });
});

describe('data', () => {
  test('DATA_REQUEST', () => {
    expect(isRequesting(false, { type: DATA_REQUEST })).toEqual(true);
  });

  test('DATA_RECEIVE_SUCCESS', () => {
    expect(isRequesting(true, { type: DATA_RECEIVE_SUCCESS })).toEqual(false);
  });

  test('DATA_RECEIVE_FAILURE', () => {
    expect(isRequesting(true, { type: DATA_RECEIVE_FAILURE })).toEqual(false);
  });
});

describe('data send', () => {
  test('DATA_SEND_REQUEST', () => {
    expect(isRequesting(false, { type: DATA_SEND_REQUEST })).toEqual(true);
  });

  test('DATA_SEND_SUCCESS', () => {
    expect(isRequesting(true, { type: DATA_SEND_SUCCESS })).toEqual(false);
  });

  test('DATA_SEND_FAILURE', () => {
    expect(isRequesting(true, { type: DATA_SEND_FAILURE })).toEqual(false);
  });
});

describe('transactions', () => {
  test('TRANSACTION_REQUEST', () => {
    expect(isRequesting(false, { type: TRANSACTION_REQUEST })).toEqual(true);
  });

  test('TRANSACTION_SUCCESS', () => {
    expect(isRequesting(true, { type: TRANSACTION_SUCCESS })).toEqual(false);
  });

  test('TRANSACTION_FAILURE', () => {
    expect(isRequesting(true, { type: TRANSACTION_FAILURE })).toEqual(false);
  });
});

describe('notifications', () => {
  test('NOTIF_REQUEST', () => {
    expect(isRequesting(false, { type: NOTIF_REQUEST })).toEqual(true);
  });

  test('NOTIF_SUCCESS', () => {
    expect(isRequesting(true, { type: NOTIF_SUCCESS })).toEqual(false);
  });

  test('NOTIF_FAILURE', () => {
    expect(isRequesting(true, { type: NOTIF_FAILURE })).toEqual(false);
  });
});

describe('user data', () => {
  test('USER_DATA_REQUEST', () => {
    expect(isRequesting(false, { type: USER_DATA_REQUEST })).toEqual(true);
  });

  test('USER_DATA_SUCCESS', () => {
    expect(isRequesting(true, { type: USER_DATA_SUCCESS })).toEqual(false);
  });

  test('USER_DATA_FAILURE', () => {
    expect(isRequesting(true, { type: USER_DATA_FAILURE })).toEqual(false);
  });
});

describe('send offer', () => {
  test('SEND_OFFER_REQUEST', () => {
    expect(isRequesting(false, { type: SEND_OFFER_REQUEST })).toEqual(true);
  });

  test('SEND_OFFER_SUCCESS', () => {
    expect(isRequesting(true, { type: SEND_OFFER_SUCCESS })).toEqual(false);
  });

  test('SEND_OFFER_FAILURE', () => {
    expect(isRequesting(true, { type: SEND_OFFER_FAILURE })).toEqual(false);
  });
});
