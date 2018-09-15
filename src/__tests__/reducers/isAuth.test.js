import isAuth from '../../reducers/isAuth';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../../actions/constants';

test('return state on non-action', () => {
  expect(isAuth(false, {})).toEqual(false);
});

test('login success', () => {
  expect(isAuth(false, { type: LOGIN_SUCCESS })).toEqual(true);
});

test('logout success', () => {
  expect(isAuth(true, { type: LOGOUT_SUCCESS })).toEqual(false);
});
