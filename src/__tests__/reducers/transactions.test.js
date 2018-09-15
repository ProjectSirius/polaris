import transactions from '../../reducers/transactions';

import {
  TRANSACTION_SUCCESS,
  TRANSACTION_USER,
  SEND_TRANSACTION_SUCCESS,
  SEND_TRANSACTION_DECLINE,
} from '../../actions/constants';

const initialState = {
  data: [],
  user: {},
  approveDecline: false,
};

const user = {
  id: 25,
  firstName: null,
  lastName: null,
  username: 'composer',
  dateOfBirth: null,
  type: 'content_owner',
  createdAt: '2018-08-27T08:27:41.837Z',
  updatedAt: '2018-08-27T08:27:41.837Z',
  email: 'composer@composer.com',
};

const data = {
  IdOrderStatus: '1',
  createdAt: '2018-09-12T05:23:37.586Z',
  createdBy: '40',
  id: '61',
  idBuyer: '25',
  idChannel: '80',
  modifiedBy: '40',
  price: 1000,
  suggestedPrice: null,
  updatedAt: '2018-09-12T05:23:37.586Z',
};

test('return state on non-action', () => {
  expect(transactions(initialState, {})).toEqual(initialState);
});

test('transaction success', () => {
  expect(
    transactions(initialState, {
      type: TRANSACTION_SUCCESS,
      payload: {
        data: [data],
      },
    })
  ).toEqual({
    user: {},
    approveDecline: false,
    data: [data],
  });
});

test('transaction user', () => {
  expect(
    transactions(initialState, {
      type: TRANSACTION_USER,
      payload: { user },
    })
  ).toEqual({
    data: [],
    user: { 25: user },
    approveDecline: false,
  });
});

test('send transaction', () => {
  expect(
    transactions(initialState, { type: SEND_TRANSACTION_SUCCESS })
  ).toEqual({
    data: [],
    user: {},
    approveDecline: true,
  });
});

test('decline transaction', () => {
  expect(
    transactions(initialState, { type: SEND_TRANSACTION_DECLINE })
  ).toEqual({
    data: [],
    user: {},
    approveDecline: true,
  });
});
