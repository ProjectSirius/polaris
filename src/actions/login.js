import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

const loginRequest = () => ({ type: LOGIN_REQUEST });

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
  },
});

const loginFailure = error => ({ type: LOGIN_FAILURE, error });

const fakeFetch = userData => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();

    if (rand > 0.5) {
      setTimeout(() => {
        return resolve({ ...userData, userType: 'audience_owner' });
      }, 1000);
    } else if (rand > 0.2) {
      setTimeout(() => {
        return resolve({ ...userData, userType: 'content_owner' });
      }, 1000);
    } else {
      setTimeout(() => {
        return reject(new Error('Failed to Log in'));
      }, 2000);
    }
  });
};

const logIn = user => dispatch => {
  dispatch(loginRequest());

  fakeFetch(user)
    .then(userData => dispatch(loginSuccess(userData)))
    .catch(msg => dispatch(loginFailure(msg)));
};

export default logIn;
