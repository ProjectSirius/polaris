import authToken from '../../reducers/authToken';
import { LOGOUT_SUCCESS, SAVE_TOKEN } from '../../actions/constants';

test('return state on non-action', () => {
  expect(authToken('', {})).toEqual('');
});

test('save token', () => {
  const token = 'token';

  expect(
    authToken('', {
      type: SAVE_TOKEN,
      payload: { token },
    })
  ).toEqual(token);
});

test('return state on logout', () => {
  const token = 'token';

  expect(authToken(token, { type: LOGOUT_SUCCESS })).toEqual('');
});
