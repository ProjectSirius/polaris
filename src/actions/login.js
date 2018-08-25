import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SAVE_TOKEN,
} from './constants';

const saveToken = token => ({
  type: SAVE_TOKEN,
  payload: {
    token,
  },
});

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

const logIn = user => dispatch => {
  dispatch(loginRequest(true));
  fetch('https://acampapi.haffollc.com/v1/login', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify({
      username: user.username,
      password: user.password,
    }), // body data type must match "Content-Type" header
  })
    .then(r => r.json())
    .then(userData => {
      if (userData.error) {
        throw new Error(userData.error);
      }

      dispatch(saveToken(userData.authToken));
      return dispatch(loginSuccess(userData.user));
    })
    .catch(msg => {
      dispatch(loginFailure(msg.message));
    });
};

export default logIn;
