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
        return reject(false);
      }, 2000);
    }
  });
};

const signUpRequest = () => ({ type: SIGN_UP_REQUEST });
const signUpSuccess = user => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    user,
  },
});
const signUpFailure = error => ({ type: SIGN_UP_FAILURE, error });

const signUp = user => dispatch => {
  dispatch(signUpRequest(user));

  fakeFetch(user)
    .then(() => dispatch(signUpSuccess(user)))
    .catch(msg => dispatch(signUpFailure(msg)));
};

export default signUp;
