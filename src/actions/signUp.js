import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from './constants';

const signUpProcess = (user, error) => {
  setTimeout(() => {
    if (user) {
      return error(null);
    } else {
      return error(new Error('Sign Up Failed'));
    }
  }, 1000);
};

const signUpRequest = user => ({ type: SIGN_UP_REQUEST, payload: user });
const signUpSuccess = user => ({ type: SIGN_UP_SUCCESS, payload: user });
const signUpFailure = error => ({ type: SIGN_UP_FAILURE, error });

const signUp = user => dispatch => {
  signUpProcess(user, error => {
    dispatch(signUpRequest(user));
    if (!error) {
      dispatch(signUpSuccess(user));
    } else {
      dispatch(signUpFailure(error));
    }
  });
};

export default signUp;
