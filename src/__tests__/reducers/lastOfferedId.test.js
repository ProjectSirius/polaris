import {
  REMOVE_FROM_CART,
  SAVE_LAST_OFFERED_ID,
} from '../../actions/constants';
import lastOfferedId from '../../reducers/lastOfferedId';

test('return state on non-action', () => {
  expect(lastOfferedId('', {})).toEqual('');
});

test('offered id', () => {
  expect(
    lastOfferedId('', {
      type: SAVE_LAST_OFFERED_ID,
      payload: {
        id: '1',
      },
    })
  ).toEqual('1');
});

test('offered id remove from cart', () => {
  expect(lastOfferedId('1', { type: REMOVE_FROM_CART })).toEqual('');
});
