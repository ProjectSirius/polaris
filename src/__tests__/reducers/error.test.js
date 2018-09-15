import error from '../../reducers/error';
import {
  DATA_RECEIVE_FAILURE,
  DATA_REQUEST,
  DATA_SEND_FAILURE,
  GENRES_FAILURE,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  NOTIF_FAILURE,
  SIGN_UP_FAILURE,
  TRANSACTION_FAILURE,
  USER_DATA_FAILURE,
} from '../../actions/constants';

const errorMessage = 'Error';

test('return state on non-action', () => {
  expect(error('', {})).toEqual('');
});

test('', () => {
  expect(
    error('', {
      type: SIGN_UP_FAILURE,
      payload: {
        error: errorMessage,
      },
    })
  ).toEqual(errorMessage);
});

test('', () => {
  expect(
    error('', {
      type: LOGIN_FAILURE,
      payload: {
        error: errorMessage,
      },
    })
  ).toEqual(errorMessage);
});

test('', () => {
  expect(
    error('', {
      type: DATA_RECEIVE_FAILURE,
      payload: {
        error: errorMessage,
      },
    })
  ).toEqual(errorMessage);
});

test('', () => {
  expect(
    error('', {
      type: DATA_SEND_FAILURE,
      payload: {
        error: errorMessage,
      },
    })
  ).toEqual(errorMessage);
});

test('', () => {
  expect(
    error('', {
      type: TRANSACTION_FAILURE,
      payload: {
        error: errorMessage,
      },
    })
  ).toEqual(errorMessage);
});

test('', () => {
  expect(
    error('', {
      type: NOTIF_FAILURE,
      payload: {
        error: errorMessage,
      },
    })
  ).toEqual(errorMessage);
});

test('', () => {
  expect(
    error('', {
      type: GENRES_FAILURE,
      payload: {
        error: errorMessage,
      },
    })
  ).toEqual(errorMessage);
});

test('', () => {
  expect(
    error('', {
      type: USER_DATA_FAILURE,
      payload: {
        error: errorMessage,
      },
    })
  ).toEqual(errorMessage);
});

test('return state on non-action', () => {
  expect(error('', { type: DATA_REQUEST })).toEqual('');
});

test('return state on non-action', () => {
  expect(error('', { type: LOGOUT_SUCCESS })).toEqual('');
});

test('return state on non-action', () => {
  expect(error('', { type: LOGIN_REQUEST })).toEqual('');
});
