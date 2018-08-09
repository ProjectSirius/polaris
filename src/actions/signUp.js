import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from './constants';

const fakeFetch = userData => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();

    if (rand > 0.2) {
      setTimeout(() => {
        return resolve(true);
      }, 1000);
    } else {
      setTimeout(() => {
        return reject(new Error('Sign-up failed'));
      }, 2000);
    }
  });
};

const signUpRequest = isSignUpRequesting => ({
  type: SIGN_UP_REQUEST,
  payload: {
    isSignUpRequesting,
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

const signUp = user => dispatch => {
  dispatch(signUpRequest(user, true));

  fakeFetch(user)
    .then(() => dispatch(signUpSuccess(user)))
    .catch(msg => dispatch(signUpFailure(msg.message)));
};

export default signUp;
