import isSignUp from '../../reducers/isSignUp';
import { SIGN_UP_SUCCESS } from '../../actions/constants';

test('return state on non-action', () => {
  expect(isSignUp(false, {})).toEqual(false);
});

test('sign up success', () => {
  expect(isSignUp(false, { type: SIGN_UP_SUCCESS })).toEqual(true);
});
