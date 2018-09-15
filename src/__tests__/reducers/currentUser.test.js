import currentUser from '../../reducers/currentUser';
import logOut from '../../actions/logOut';
import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../../actions/constants';

test('null on logout', () => {
  expect(currentUser({}, logOut())).toEqual(null);
});

test('null on login failure', () => {
  expect(
    currentUser(
      {},
      {
        type: LOGIN_FAILURE,
        payload: {
          error: 'Error',
        },
      }
    )
  ).toEqual(null);
});

test('userdata on login', () => {
  const userInfo = {
    createdAt: '2018-08-27T08:27:41.837Z',
    dateOfBirth: null,
    email: 'composer@composer.com',
    firstName: null,
    id: 25,
    lastName: null,
    type: 'content_owner',
    updatedAt: '2018-08-27T08:27:41.837Z',
    username: 'composer',
  };
  expect(
    currentUser(null, {
      type: LOGIN_SUCCESS,
      payload: {
        user: userInfo,
      },
    })
  ).toBe(userInfo);
});

test('return state on non-action', () => {
  expect(currentUser({}, { type: 'WOW' })).toEqual({});
});
