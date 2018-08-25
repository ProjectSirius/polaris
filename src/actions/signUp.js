import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from './constants';

const signUpRequest = isRequesting => ({
  type: SIGN_UP_REQUEST,
  payload: {
    isRequesting,
  },
});

const signUpSuccess = user => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    user,
  },
});

const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: {
    error,
  },
});

const signUp = ({
  userType,
  username,
  password,
  passwordConfirmation,
  email,
}) => dispatch => {
  dispatch(signUpRequest({ userType, username, email }, true));
  debugger;

  const path =
    userType === 'content_owner'
      ? 'signup-content-owner'
      : 'signup-audience-owner';

  fetch(`https://acampapi.haffollc.com/v1/${path}`, {
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
      username: username,
      password: password,
      confirmPassword: passwordConfirmation,
      email,
    }), // body data type must match "Content-Type" header
  })
    .then(r => r.json())
    .then(userData => {
      if (userData.error) {
        throw new Error(userData.error);
      }

      return dispatch(signUpSuccess({ username }));
    })
    .catch(msg => {
      dispatch(signUpFailure(msg.message));
    });
};

export default signUp;
