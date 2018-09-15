import successMessage from '../../reducers/successMessage';
import { REMOVE_FROM_CART, SEND_OFFER_SUCCESS } from '../../actions/constants';

test('return state on non-action', () => {
  expect(successMessage('', {})).toEqual('');
});

test('successMessage SEND_OFFER_SUCCESS', () => {
  expect(
    successMessage('', {
      type: SEND_OFFER_SUCCESS,
    })
  ).toEqual('Offer Sent!');
});

test('successMessage REMOVE_FROM_CART', () => {
  expect(
    successMessage('', {
      type: REMOVE_FROM_CART,
    })
  ).toEqual('');
});
