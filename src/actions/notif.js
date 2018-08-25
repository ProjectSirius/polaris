import axios from 'axios';

import { NOTIF_SUCCESS, NOTIF_FAILURE, NOTIF_REQUEST } from './constants';

const notifReceive = data => ({
  type: NOTIF_SUCCESS,
  payload: { data },
});

const notifRequest = data => ({
  type: NOTIF_REQUEST,
  payload: { data },
});

const notifReceiveFailure = error => ({
  type: NOTIF_FAILURE,
  payload: { error },
});

const getNotif = () => dispatch => {
  dispatch(notifRequest(true));

  return axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then(payload => dispatch(notifReceive(payload.data)))
    .catch(err => dispatch(notifReceiveFailure(err)));
};

export default getNotif;
