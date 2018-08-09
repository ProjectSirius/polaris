import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

const loginRequest = isRequesting => ({
  type: LOGIN_REQUEST,
  payload: {
    isRequesting,
  },
});

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
  },
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

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
  dispatch(loginRequest(true));

  fakeFetch(user)
    .then(userData => dispatch(loginSuccess(userData)))
    .catch(msg => dispatch(loginFailure(msg.message)));
};

export default logIn;
